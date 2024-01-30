import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { loadingReducer } from "./slices/loadingSlice";
import { productReducer } from "./slices/productSlice";


const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  loading: loadingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
