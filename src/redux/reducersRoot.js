import { combineReducers } from "redux";
import categoriesReducer from "./reducer/categoriesReducer";
import cartReducer from "./reducer/cartReducer";
import bagReducer from "././reducer/bagReducer";
import currencyReducer from "./reducer/currencyReducer";
import productReducer from "./reducer/productReducer";
const reducersRoot = combineReducers({
  categories: categoriesReducer,
  carts: cartReducer,
  active: bagReducer,
  currencies: currencyReducer,
  product: productReducer,
});

export default reducersRoot;
