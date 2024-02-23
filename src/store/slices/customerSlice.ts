import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customerService from '../../services/customerService';
import { AddCustomerRequest } from '../../models/customer/request/addCustomerRequest';

export const fetchCustomers = createAsyncThunk(
	"customers/fetchCustomers",
    async(thunkAPI) => {
        try {
            const response = await customerService.getAll();
        return response.data;
        } catch (error) {
            console.error("fetchcustomer error", error);
            throw error;
        }
		
	},
);

export const addCustomer = createAsyncThunk(
    "customers/addCustomer",
    async (addCustomerRequest: AddCustomerRequest, thunkAPI) => {
      try {
        const response = await customerService.add(addCustomerRequest);
        return response.data;
      } catch (error) {
        console.error("addcustomer error", error);
        throw error;
      }
    }
  );
 

const CustomerSlice= createSlice({
    name:"customer",
    initialState:{
        loading: "initial",
        customers: [] as any,
    },
    reducers:{},
    extraReducers:builder =>{
        builder.addCase(fetchCustomers.pending,state =>{
            state.loading="loading";
        });
        builder.addCase(fetchCustomers.fulfilled, (state, action) => {
            state.loading = "loaded";
            state.customers = action.payload;
          });
        builder.addCase(fetchCustomers.rejected,state =>{
            state.loading="error";
        });
        
        builder.addCase(addCustomer.pending,(state) =>{
            state.loading="loading";
        });
       
        builder.addCase(addCustomer.fulfilled, (state, action) => {
            state.loading = "loaded";
            state.customers.push(action.payload); 
            console.log("Added customer:", action.payload); 
        });
        
        
        builder.addCase(addCustomer.rejected,(state) =>{
            state.loading="error";
        });
        

       
    }
})
export const customerReducer = CustomerSlice.reducer;
export const {}= CustomerSlice.actions;