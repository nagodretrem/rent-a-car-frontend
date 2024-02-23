import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { productReducer } from "./slices/productSlice";
import { authReducer } from "./slices/authSlice";
import { carReducer } from "./slices/carSlice";
import { brandReducer } from "./slices/brandSlice";
import { colorReducer } from "./slices/colorSlice";
import { modelReducer } from "./slices/modelSlice";
import { tokenReducer }  from "./slices/tokenSlice";
import { customerReducer } from "./slices/customerSlice";


const rootReducer = combineReducers({
  auth: authReducer,
  car: carReducer,
  brand: brandReducer,
  color: colorReducer,
  model: modelReducer,
  customer: customerReducer,
  cart: cartReducer,
  product: productReducer,
  token: tokenReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export default store;