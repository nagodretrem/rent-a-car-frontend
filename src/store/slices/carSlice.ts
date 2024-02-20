import { AddCarRequest } from '../../models/cars/requests/addCarRequest';
import { UpdateCarRequest } from '../../models/cars/requests/updateCarRequest';
import carService from '../../services/carService';
import { GetAllCarResponse } from './../../models/cars/response/getAllCarResponse';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 

export const fetchCars = createAsyncThunk(
	"cars/fetchCars",
	async (args, thunkAPI) => {
		console.log("fetchCars fonksiyonu çağrıldı");
		const state: any = thunkAPI.getState();

		if (
			state.car.cars.length > 0 &&
			!(new Date().getTime() - state.car.lastFetch > 60000)
		) {
			return state.car.cars;
		}

		const response = await carService.getAll();
		return response.data;
		
	},
);

export const addCar = createAsyncThunk(
    "cars/addCar",
    async (addCarRequest: AddCarRequest, thunkAPI) => {
      try {
        const response = await carService.add(addCarRequest);
		return response.data;
	} catch (error) {
        console.error("addCar error", error);
        throw error;
      }
    }
);


  

export const deleteCar = createAsyncThunk(
    "cars/deleteCar",
    async (id: number, thunkAPI) => {
        try {
            const response = await carService.delete(id);
            return id;
        } catch (error) {
            console.error("deleteCar error", error);
            throw error;
        }
    });

	export const updateCar = createAsyncThunk(
		"cars/updateCar",
		async (updateCarRequest: UpdateCarRequest,thunkAPI)=>{
			try {
				const response = await carService.update(updateCarRequest);
				return response.data;
			} catch (error) {
				console.error("updatedCar error",error);
				throw error;
			}
	
		}
	);
const carSlice = createSlice({
	name: "car",
	initialState: {
		loading: "initial",
		cars: [] as any[],
		lastFetch: new Date().getTime(),
	},
	reducers: {

  },
	extraReducers: builder => {
		builder.addCase(fetchCars.pending, state => {
			state.loading = "loading";
		});
		builder.addCase(fetchCars.fulfilled, (state, action) => {
			state.loading = "loaded";
			state.cars=action.payload;
		});
		builder.addCase(fetchCars.rejected, state => {
			state.loading = "error";
		});

		builder.addCase(addCar.pending,state=>{
			state.loading="loading";

		});
		builder.addCase(addCar.fulfilled,(state,action)=>{
			state.loading = "loaded";
            state.cars.push(action.payload); 
		});
		builder.addCase(addCar.rejected, (state) => {
			state.loading = "error";
		  });

		builder.addCase(updateCar.pending,state=>{
			state.loading = "loading";

		});
		builder.addCase(updateCar.fulfilled,(state,action)=>{
			state.loading = "loaded";
            
            state.cars = state.cars.map((car: any) =>
                car.id === action.payload.id ? action.payload : car
            );
		});
		builder.addCase(updateCar.rejected,state=>{
			state.loading="error";

		});

		builder.addCase(deleteCar.pending,state =>{
			state.loading="loading";

		});
		builder.addCase(deleteCar.fulfilled,(state,action)=>{
			state.loading = "loaded";
        state.cars = state.cars.filter((car:any) => car.id !== action.payload);
		});

		builder.addCase(deleteCar.rejected,(state)=>{
            state.loading="error";
        });
	},
});

export const carReducer = carSlice.reducer;
export const { } = carSlice.actions;