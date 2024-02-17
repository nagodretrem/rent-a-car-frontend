import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { productReducer } from "./slices/productSlice";
import { authReducer } from "./slices/authSlice";
import { carReducer } from "./slices/carSlice";
import { brandReducer } from "./slices/brandSlice";


const rootReducer = combineReducers({
  auth: authReducer,
  car: carReducer,
  brand: brandReducer,
  cart: cartReducer,
  product: productReducer,
  
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export default store;