import {combineReducers} from "redux"
import someReducer from "./someReducer"

const rootReducers = combineReducers({
    one: someReducer,
})

export default rootReducers