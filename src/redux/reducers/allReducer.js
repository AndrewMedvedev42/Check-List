//REDUX
import {combineReducers} from "redux"
import phaseReducer from "./Phase-Reducer"

//To combine Reducers
const rootReducers = combineReducers({
    Phases: phaseReducer,
})

export default rootReducers