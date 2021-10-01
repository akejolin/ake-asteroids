import * as actionTypes from "./actions"

const initialState: ScoreState = {
  score: 0

const reducer = (
    state: ScoreState = initialState,
    action: ReduxAction,
    payload: ReduxPayload,
  ): ScoreState => {
    switch (action.type) {
      case actionTypes.ADD_ARTICLE:
        return {
          ...state,
          score: payload,
        }
      
    }
    return state
  }
  
  export default reducer