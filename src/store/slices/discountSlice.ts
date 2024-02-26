import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllDiscountResponse } from "../../models/discount/response/getAllDiscountResponse";
import discountService from "../../services/discountService";
import { AddDiscountRequest } from "../../models/discount/request/addDiscountRequest";
import axiosInstance from "../../utils/interceptors/axiosInterceptors";
import { GetByIdDiscountResponse } from "../../models/discount/response/getByIdDiscountResponse";


export const fetchDiscounts = createAsyncThunk(
	"discounts/fetchDiscounts",
    async(thunkAPI) => {
        try {
            const response = await discountService.getAll();
        return response.data;
        } catch (error) {
            console.error("fetchDiscounts error", error);
            throw error;
        }
		
	},
);

export const addDiscount = createAsyncThunk(
    "discounts/addDiscount",
    async (addDiscountRequest: AddDiscountRequest, thunkAPI) => {
      try {
        const response = await discountService.add(addDiscountRequest);
        return response.data;
      } catch (error) {
        console.error("addDiscount error", error);
        throw error;
      }
    }
  );
  export const getByStringCode = createAsyncThunk(
    "discounts/getByStringCode",
    async (stringCode: string, thunkAPI) => {
      try {
        const response = await discountService.getByStringCode(stringCode);
        return response;
      } catch (error) {
        console.error("getByStringCode error", error);
        throw error;
      }
    }
  );
  


const DiscountSlice= createSlice({
    name:"discount",
    initialState:{
        loading: "initial",
        discounts: [] as any,
        
        discountValue: null as GetByIdDiscountResponse | null,


    },
    reducers: {
        
    },
    extraReducers:builder =>{
        
          
        builder.addCase(fetchDiscounts.pending,state =>{
            state.loading="loading";
        });
        builder.addCase(fetchDiscounts.fulfilled, (state, action) => {
            state.loading = "loaded";
            state.discounts = action.payload;
          });
        builder.addCase(fetchDiscounts.rejected,state =>{
            state.loading="error";
        });
        
        builder.addCase(addDiscount.pending,(state) =>{
            state.loading="loading";
        });
       
      
        builder.addCase(addDiscount.fulfilled, (state, action) => {
            state.loading = "loaded";
            state.discounts.push(action.payload);
            console.log("Added discount:", action.payload);
          });
        
        
        builder.addCase(addDiscount.rejected,(state) =>{
            state.loading="error";
        });
        builder.addCase(getByStringCode.pending, (state) => {
            state.loading = "loading";
          });
          
          builder.addCase(getByStringCode.fulfilled, (state, action) => {
            state.loading = "loaded";
            state.discountValue = action.payload;
            console.log("getByStringCode.fulfilled - action.payload:", action.payload);
          });
          
          builder.addCase(getByStringCode.rejected, (state) => {
            state.loading = "error";
          });
       
    }
})
export const discountReducer = DiscountSlice.reducer;
export const {}= DiscountSlice.actions;

