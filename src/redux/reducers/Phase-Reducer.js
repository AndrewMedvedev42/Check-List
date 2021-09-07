import { LOAD_PHASE_1_STATS, LOAD_PHASE_2_STATS, LOAD_PHASE_3_STATS } from "../actions/action-constants";

const initState = {
    phase1:false,
    phase2:false,
    phase3:false,
}

//Reducers will store the overall status (that "concludeStatus" provided in phaseActions.js) of the phase for corresponding phases

const phaseReducer = (state=initState, action) => {
    switch (action.type){
        case LOAD_PHASE_1_STATS:
            return {...state, phase1:action.payload.data}
        case LOAD_PHASE_2_STATS:
            return {...state, phase2:action.payload.data}
        case LOAD_PHASE_3_STATS:
            return {...state, phase3:action.payload.data}
        default:
            return {...state}
    }
}

export default phaseReducer