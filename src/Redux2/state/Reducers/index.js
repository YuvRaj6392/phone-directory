import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
const Reducers=combineReducers({
    amount:amountReducer
})

export default Reducers