import { AddBrandRequest } from './../../models/brands/requests/addBrandRequest';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import brandService from "../../services/brandService";
import { UpdateBrandRequest } from '../../models/brands/requests/updateBrandRequest';

export const fetchBrands = createAsyncThunk(
	"brands/fetchBrands",
    async(thunkAPI) => {
        try {
            const response = await brandService.getAll();
        return response.data;
        } catch (error) {
            console.error("fetchBrands error", error);
            throw error;
        }
		
	},
);

export const addBrand = createAsyncThunk(
    "brands/addBrand",
    async (addBrandRequest: AddBrandRequest, thunkAPI) => {
      try {
        const response = await brandService.add(addBrandRequest);
        return response.data;
      } catch (error) {
        console.error("addBrand error", error);
        throw error;
      }
    }
  );
  export const deleteBrand = createAsyncThunk(
    "brands/deleteBrand",
    async (id: number, thunkAPI) => {
        try {
            const response = await brandService.delete(id);
            return id;
        } catch (error) {
            console.error("deleteBrand error", error);
            throw error;
        }
    });

export const updateBrand = createAsyncThunk(
    "brands/updateBrand",
    async (updateBrandRequest: UpdateBrandRequest,thunkAPI)=>{
        try {
            const response = await brandService.update(updateBrandRequest);
            return response.data;
        } catch (error) {
            console.error("updatedBrand error",error);
            throw error;
        }

    }
);
const brandSlice= createSlice({
    name:"brand",
    initialState:{
        loading: "initial",
        brands: [] as any,
    },
    reducers:{},
    extraReducers:builder =>{
        builder.addCase(fetchBrands.pending,state =>{
            state.loading="loading";
        });
        builder.addCase(fetchBrands.fulfilled, (state, action) => {
            state.loading = "loaded";
            state.brands = action.payload;
          });
        builder.addCase(fetchBrands.rejected,state =>{
            state.loading="error";
        });
        
        builder.addCase(addBrand.pending,(state) =>{
            state.loading="loading";
        });
       
        builder.addCase(addBrand.fulfilled, (state, action) => {
            state.loading = "loaded";
            state.brands.push(action.payload); 
        });
        
        builder.addCase(addBrand.rejected,(state) =>{
            state.loading="error";
        });
        builder.addCase(updateBrand.pending,(state)=>{
            state.loading="loading";
        });
       
        builder.addCase(updateBrand.fulfilled, (state, action) => {
            state.loading = "loaded";
            
            state.brands = state.brands.map((brand: any) =>
                brand.id === action.payload.id ? action.payload : brand
            );
        });
        builder.addCase(updateBrand.rejected,(state)=>{
            state.loading="error";
        });

        builder.addCase(deleteBrand.pending,(state)=>{
            state.loading="loading";
        });
        builder.addCase(deleteBrand.fulfilled,(state,action)=>{
            state.loading = "loaded";
        state.brands = state.brands.filter((brand:any) => brand.id !== action.payload);
        });
        builder.addCase(deleteBrand.rejected,(state)=>{
            state.loading="error";
        });
    }
})
export const brandReducer = brandSlice.reducer;
export const {}= brandSlice.actions;