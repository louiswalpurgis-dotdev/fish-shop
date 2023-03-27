import { combineReducers } from "redux";
import cartReducer from "~/reducers";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
