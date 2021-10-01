import { createAction } from 'redux-actions'

export const ADD_SCORE = 'ADD_SCORE'
const _addScore = createAction(ADD_SCORE)
const addScore = data => dispatch => dispatch(_addScore(data))