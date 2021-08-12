
const concludeStatus = (e) => {
    if (e.includes(false)) {
      return false
    } else {
      return true
    }
  };

export const loadPhase1Stats = (data) => async (dispatch) => {

    const statusSummary = concludeStatus(data)

    dispatch({
        type:"LOAD_PHASE1_STATS",
        payload:{
            data: statusSummary,
        }
    })
}

export const loadPhase2Stats = (data) => async (dispatch) => {

    const statusSummary = concludeStatus(data)

    dispatch({
        type:"LOAD_PHASE2_STATS",
        payload:{
            data: statusSummary,
        }
    })
}

export const loadPhase3Stats = (data) => async (dispatch) => {

    const statusSummary = concludeStatus(data)

    dispatch({
        type:"LOAD_PHASE3_STATS",
        payload:{
            data: statusSummary,
        }
    })
}