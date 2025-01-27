import { combineReducers } from "redux"
import userReducer from "./userReducer"
import { AuthenticationReducer } from "./AuthenticationReducer"

const reducer = combineReducers({
    userReducer,
    AuthenticationReducer
})
export default reducer