import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import modelService from "../../services/modelService";
import { AddModelRequest } from "../../models/model/requests/addModelRequest";
import { UpdateModelRequest } from "../../models/model/requests/updateModelRequest";

export const fetchModels= createAsyncThunk(
    "models/fetchModels",
    async(thunkAPI) =>{
        try {
            const response = await modelService.getAll();
            return response.data;
        } catch(error){
            console.error("fetchModels error",error);
            throw error;
        }
    }

);


export const addModel = createAsyncThunk(
    "models/addModel",
    async (addModelRequest: AddModelRequest, thunkAPI) => {
      try {
        const response = await modelService.add(addModelRequest);
        return response.data;
      } catch (error) {
        console.error("addModel error", error);
        throw error;
      }
    }
  ); 

export const deleteModel = createAsyncThunk(
    "models/deleteModel",
    async (id: number, thunkAPI) => {
        try {
            const response = await modelService.delete(id);
            return id;
        } catch (error) {
            console.error("deleteModel error", error);
            throw error;
        }
    });

export const updateModel = createAsyncThunk(
    "models/updateModel",
    async (updateModelRequest: UpdateModelRequest,thunkAPI)=>{
        try {
            const response = await modelService.update(updateModelRequest);
            return response.data;
        } catch (error) {
            console.error("updatedModel error",error);
            throw error;
        }

    }
);



const modelSlice = createSlice({
    name:"model",
    initialState:{
        loading:"initial",
        models: [] as any,
    },
    reducers:{},
    extraReducers: builder =>{
        builder.addCase(fetchModels.pending,state =>{
            state.loading="loading";
        });
        builder.addCase(fetchModels.fulfilled,(state,action)=>{
            state.loading="loaded";
            state.models=action.payload;
        });
        builder.addCase(fetchModels.rejected,state =>{
            state.loading="error";
        });

        builder.addCase(addModel.pending,state =>{
            state.loading="loading";
        });
        builder.addCase(addModel.fulfilled,(state,action)=>{
            state.loading="loaded";
            state.models.push(action.payload);
        });
        builder.addCase(addModel.rejected,state =>{
            state.loading="error";
        });


        builder.addCase(updateModel.pending,state=>{
            state.loading="loading";
        });
        builder.addCase(updateModel.fulfilled,(state,action)=>{
            state.loading="loaded";
            state.models = state.models.map((model: any) =>
                model.id === action.payload.id ? action.payload : model
            );
        });
        builder.addCase(updateModel.rejected,state=>{
            state.loading="error";

        });

        builder.addCase(deleteModel.pending,state =>{
            state.loading="loading";

        });
        builder.addCase(deleteModel.fulfilled,(state,action)=>{
            state.loading = "loaded";
        state.models = state.models.filter((model:any) => model.id !== action.payload);
        });
        builder.addCase(deleteModel.rejected,state=>{
            state.loading="error";

        });

    }
})
export const modelReducer = modelSlice.reducer;
export const {} = modelSlice.actions;