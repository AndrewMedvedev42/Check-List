import {combineReducers} from "redux"
import PhaseReducer from "./Phase-Reducer"


const rootReducers = combineReducers({
    Phases: PhaseReducer,
})

export default rootReducers