import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { carReducer } from "./slices/carSlice";
import { brandReducer } from "./slices/brandSlice";
import { colorReducer } from "./slices/colorSlice";
import { modelReducer } from "./slices/modelSlice";
import { tokenReducer }  from "./slices/tokenSlice";
import { customerReducer } from "./slices/customerSlice";
import { rentalReducer } from "./slices/rentalSlice";
import { filtersReducer } from "./slices/filterSlice";
import { loadingReducer } from "./slices/loadingSlice";


const rootReducer = combineReducers({
  auth: authReducer,
  car: carReducer,
  brand: brandReducer,
  color: colorReducer,
  model: modelReducer,
  customer: customerReducer,
  rental: rentalReducer,
  token: tokenReducer,
  filter: filtersReducer,
  loading: loadingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;