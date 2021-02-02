import { combineReducers } from "redux";
import ProductReducer from "./product-reducer";
import CartReducer from "./cart-reducer";

const rootReducer = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
});

export default rootReducer;
