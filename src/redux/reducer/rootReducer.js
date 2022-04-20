import { combineReducers } from "redux";
import carDetailReducer from "./carDetailReducer";
import carListReducer from "./carListReducer";

export default combineReducers({
    carDetail: carDetailReducer,
    carList: carListReducer,
});