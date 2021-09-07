//When dispatch was triggered by default or by "gainStatuses" function (from ListTemplate) 
//"concludeStatus" will get an array like this : [false, true, false],
//to sum up all given statuses into one respond
//If "concludeStatus" finds false in given array, it will return false as there not all checkboxes are selected,
//The result will be stored i  Redux store

import { LOAD_PHASE_1_STATS, LOAD_PHASE_2_STATS, LOAD_PHASE_3_STATS } from "../actions/action-constants";


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
        type:LOAD_PHASE_1_STATS,
        payload:{
            data: statusSummary,
        }
    })
}

export const loadPhase2Stats = (data) => async (dispatch) => {
    const statusSummary = concludeStatus(data)
    dispatch({
        type: LOAD_PHASE_2_STATS,
        payload:{
            data: statusSummary,
        }
    })
}

export const loadPhase3Stats = (data) => async (dispatch) => {
    const statusSummary = concludeStatus(data)
    dispatch({
        type:LOAD_PHASE_3_STATS,
        payload:{
            data: statusSummary,
        }
    })
}