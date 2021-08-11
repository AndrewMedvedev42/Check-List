export const loadPhase1Stats = (data) => async (dispatch) => {
    dispatch({
        type:"LOAD_PHASE1_STATS",
        payload:{
            data: data,
        }
    })
}

export const loadPhase2Stats = (data) => async (dispatch) => {
    dispatch({
        type:"LOAD_PHASE2_STATS",
        payload:{
            data: data,
        }
    })
}

export const loadPhase3Stats = (data) => async (dispatch) => {
    dispatch({
        type:"LOAD_PHASE3_STATS",
        payload:{
            data: data,
        }
    })
}