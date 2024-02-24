import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import rentalService from "../../services/rentalService";
import { AddRentalRequest } from "../../models/rental/request/addRentalRequest";

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
 

const RentalSlice= createSlice({
    name:"rental",
    initialState:{
        loading: "initial",
        rentals: [] as any,
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
        

       
    }
})
export const rentalReducer = RentalSlice.reducer;
export const {}= RentalSlice.actions;