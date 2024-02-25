import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import rentalService from "../../services/rentalService";
import { AddRentalRequest } from "../../models/rental/request/addRentalRequest";
import { GetAllRentalResponse } from "../../models/rental/response/getAllRentalResponse";

export const fetchRentals = createAsyncThunk(
	"rentals/fetchRentals",
    async(thunkAPI) => {
        try {
            const response = await rentalService.getAll();
        return response.data;
        } catch (error) {
            console.error("fetchRentals error", error);
            throw error;
        }
		
	},
);

export const addRental = createAsyncThunk(
    "rentals/addRental",
    async (addRentalRequest: AddRentalRequest, thunkAPI) => {
      try {
        const response = await rentalService.add(addRentalRequest);
        return response.data;
      } catch (error) {
        console.error("addRental error", error);
        throw error;
      }
    }
  );
  export const getById = createAsyncThunk(
    "rentals/getById",
    async (rentalId: number, thunkAPI) => {
      try {
        const response = await rentalService.getById(rentalId);
        return response.data;
      } catch (error) {
        console.error("getById error", error);
        throw error;
      }
    }
  );

const RentalSlice= createSlice({
    name:"rental",
    initialState:{
        loading: "initial",
        rentals: [] as any,
        selectedRental: null as GetAllRentalResponse | null,

    },
    reducers:{},
    extraReducers:builder =>{
        builder.addCase(fetchRentals.pending,state =>{
            state.loading="loading";
        });
        builder.addCase(fetchRentals.fulfilled, (state, action) => {
            state.loading = "loaded";
            state.rentals = action.payload;
          });
        builder.addCase(fetchRentals.rejected,state =>{
            state.loading="error";
        });
        
        builder.addCase(addRental.pending,(state) =>{
            state.loading="loading";
        });
       
        builder.addCase(addRental.fulfilled, (state, action) => {
            state.loading = "loaded";
            state.rentals.push(action.payload); 
            console.log("Added rental:", action.payload); 
        });
        
        
        builder.addCase(addRental.rejected,(state) =>{
            state.loading="error";
        });
        
        builder.addCase(getById.pending, (state) => {
            state.loading = "loading";
          });
          
          builder.addCase(getById.fulfilled, (state, action) => {
            state.loading = "loaded";
            state.selectedRental = action.payload;
          });
          
          builder.addCase(getById.rejected, (state) => {
            state.loading = "error";
          });

       
    }
})
export const rentalReducer = RentalSlice.reducer;
export const {}= RentalSlice.actions;