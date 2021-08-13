const initState = {
    phase1:false,
    phase2:false,
    phase3:false,
}

const PhaseReducer = (state=initState, action) => {
    switch (action.type){
        case "LOAD_PHASE1_STATS":
            return {...state, phase1:action.payload.data}
        case "LOAD_PHASE2_STATS":
            return {...state, phase2:action.payload.data}
        case "LOAD_PHASE3_STATS":
            return {...state, phase3:action.payload.data}
        default:
            return {...state}
    }
}

export default PhaseReducer