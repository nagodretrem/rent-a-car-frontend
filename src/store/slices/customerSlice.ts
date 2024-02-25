import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customerService from '../../services/customerService';
import { AddCustomerRequest } from '../../models/customer/request/addCustomerRequest';
import { UpdateCustomerRequest } from "../../models/customer/request/updateCustomerRequest";

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

export const getByIdCustomer = createAsyncThunk(
    "customers/getByIdCustomer",
    async (customerId: number, thunkAPI) => {
      try {
        const response = await customerService.getById(customerId);
        return response.data;
      } catch (error) {
        console.error("getByIdCustomer error", error);
        throw error;
      }
    }
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
  export const updateCustomer = createAsyncThunk(
    "customers/updateCustomer",
    async (updateCustomerRequest: UpdateCustomerRequest,thunkAPI)=>{
        try {
            const response = await customerService.update(updateCustomerRequest);
            return response.data;
        } catch (error) {
            console.error("updatedCustomer error",error);
            throw error;
        }

    }
);

const CustomerSlice= createSlice({
    name:"customer",
    initialState:{
        loading: "initial",
        customer: null as any, 
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
        

        builder.addCase(updateCustomer.pending,state=>{
			state.loading = "loading";

		});
		builder.addCase(updateCustomer.fulfilled,(state,action)=>{
			state.loading = "loaded";
            
            state.customers = state.customers.map((customer: any) =>
                customer.id === action.payload.id ? action.payload : customer
            );
		});
		builder.addCase(updateCustomer.rejected,state=>{
			state.loading="error";

		});


        builder.addCase(getByIdCustomer.pending, state => {
            state.loading = "loading";
        });
        
        builder.addCase(getByIdCustomer.fulfilled, (state, action) => {
            state.loading = "loaded";
            state.customer = action.payload; // Bu satırda action.payload içinde döndürülen müşteri bilgisi olmalı
        });
        
        builder.addCase(getByIdCustomer.rejected, state => {
            state.loading = "error";
        });
        
    }
})
export const customerReducer = CustomerSlice.reducer;
export const {}= CustomerSlice.actions;