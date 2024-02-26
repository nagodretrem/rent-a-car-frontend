import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllInvoiceResponse } from "../../models/invoices/response/getAllInvoiceResponse";
import invoiceService from "../../services/invoiceService";
import { AddInvoiceRequest } from "../../models/invoices/requests/addInvoiceRequest";

export const fetchInvoices = createAsyncThunk(
	"invoices/fetchInvoices",
    async(thunkAPI) => {
        try {
            const response = await invoiceService.getAll();
        return response.data;
        } catch (error) {
            console.error("fetchInvoices error", error);
            throw error;
        }
		
	},
);

export const addInvoice = createAsyncThunk(
    "invoices/addInvoice",
    async (addInvoiceRequest: AddInvoiceRequest, thunkAPI) => {
      try {
        const response = await invoiceService.add(addInvoiceRequest);
        return response.data;
      } catch (error) {
        console.error("addInvoice error", error);
        throw error;
      }
    }
  );
  export const getById = createAsyncThunk(
    "invoices/getById",
    async (invoiceId: number, thunkAPI) => {
      try {
        const response = await invoiceService.getById(invoiceId);
        return response.data;
      } catch (error) {
        console.error("getById error", error);
        throw error;
      }
    }
  );

const InvoiceSlice= createSlice({
    name:"invoice",
    initialState:{
        loading:"initial",
        invoices: [] as any,
        selectedInvoice: null as GetAllInvoiceResponse | null,
    },
    reducers:{},
    extraReducers:builder =>{
        builder.addCase(fetchInvoices.pending,state =>{
            state.loading="loading";
        });
        builder.addCase(fetchInvoices.fulfilled, (state, action) => {
            state.loading = "loaded";
            state.invoices = action.payload;
          });
        builder.addCase(fetchInvoices.rejected,state =>{
            state.loading="error";
        });
        
        builder.addCase(addInvoice.pending,(state) =>{
            state.loading="loading";
        });
       
        builder.addCase(addInvoice.fulfilled, (state, action) => {
            state.loading = "loaded";
            state.invoices.push(action.payload); 
            console.log("Added invoice:", action.payload); 
        });
        
        
        builder.addCase(addInvoice.rejected,(state) =>{
            state.loading="error";
        });
        
        builder.addCase(getById.pending, (state) => {
            state.loading = "loading";
          });
          
          builder.addCase(getById.fulfilled, (state, action) => {
            state.loading = "loaded";
            state.selectedInvoice = action.payload;
          });
          
          builder.addCase(getById.rejected, (state) => {
            state.loading = "error";
          });

       
    }
})
export const invoiceReducer = InvoiceSlice.reducer;
export const {}= InvoiceSlice.actions;