import {combineReducers,  legacy_createStore as createStore} from "redux";
import gameReducer from "./gameReducer";


let reducers = combineReducers( {
    game : gameReducer
})

let reduxStore = createStore(reducers)
export default reduxStore