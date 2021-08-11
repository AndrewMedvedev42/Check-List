import {combineReducers} from "redux"
import PhaseReducer from "./Phase-Reducer"


const rootReducers = combineReducers({
    PhaseReducer: PhaseReducer,
})

export default rootReducers