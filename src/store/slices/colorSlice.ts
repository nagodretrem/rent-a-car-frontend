import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import colorService from "../../services/colorService";
import { AddColorRequest } from "../../models/color/requests/addColorRequest";
import { UpdateColorRequest } from "../../models/color/requests/updateColorRequest";

export const fetchColors = createAsyncThunk(
	"colors/fetchColors",
    async(thunkAPI) => {
        try {
            const response = await colorService.getAll();
        return response.data;
        } catch (error) {
            console.error("fetchColors error", error);
            throw error;
        }
		
	},
);

export const addColor = createAsyncThunk(
    "colors/addColor",
    async (addColorRequest: AddColorRequest, thunkAPI) => {
      try {
        const response = await colorService.add(addColorRequest);
        return response.data;
      } catch (error) {
        console.error("addColor error", error);
        throw error;
      }
    }
  );
export const deleteColor = createAsyncThunk(
    "colors/deleteColor",
    async (id: number, thunkAPI) => {
        try {
            const response = await colorService.delete(id);
            return id;
        } catch (error) {
            console.error("deleteColor error", error);
            throw error;
        }
    });
    export const updateColor = createAsyncThunk(
        "colors/updateColor",
        async (updateColorRequest: UpdateColorRequest,thunkAPI)=>{
            try {
                const response = await colorService.update(updateColorRequest);
                return response.data;
            } catch (error) {
                console.error("updateColor error",error);
                throw error;
            }
    
        }
    );

const colorSlice = createSlice({
    name:"color",
    initialState:{
        loading: "initial",
        colors: [] as any,
    },
    reducers:{},
    extraReducers:builder =>{
        builder.addCase(fetchColors.pending,state =>{
            state.loading="loading";
        });
        builder.addCase(fetchColors.fulfilled,(state,action)=>{
            state.loading="loaded";
            state.colors=action.payload;
        });
        builder.addCase(fetchColors.rejected,state =>{
            state.loading="error";
        });

        builder.addCase(addColor.pending,state =>{
            state.loading="loading";

        });
        builder.addCase(addColor.fulfilled,(state,action)=>{
            state.loading="loaded";
            state.colors.push(action.payload);
        });
        builder.addCase(addColor.rejected,state=>{
            state.loading="error";

        });

        builder.addCase(updateColor.pending,state =>{
            state.loading="loading";
        });
        builder.addCase(updateColor.fulfilled,(state,action)=>{
            state.loading = "loaded";
            state.colors = state.colors.map((color: any) =>
            color.id === action.payload.id ? action.payload : color
        );

        });
        builder.addCase(updateColor.rejected,state =>{
            state.loading="error";

        });
        builder.addCase(deleteColor.pending,state =>{
            state.loading="loading";

        });
        builder.addCase(deleteColor.fulfilled,(state,action)=>{
            state.loading="loaded";
            state.colors = state.colors.filter((color:any) => color.id !== action.payload);

        });
        builder.addCase(deleteColor.rejected,state =>{
            state.loading="error";

        });
    }
})
export const colorReducer = colorSlice.reducer;
export const {} = colorSlice.actions;