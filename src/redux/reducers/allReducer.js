//REDUX
import {combineReducers} from "redux"
import PhaseReducer from "./Phase-Reducer"

//To combine Reducers
const rootReducers = combineReducers({
    Phases: PhaseReducer,
})

export default rootReducers