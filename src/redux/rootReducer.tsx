import { combineReducers } from "redux";
import cartSlice from "./slices/cartSlice";
export const rootReducer = combineReducers({
  cart: cartSlice,
});
