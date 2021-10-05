import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'src/store'

// Define a type for the slice state

export enum statusTypes {
  MOUNTING = "MOUNTING",
  GAME_ON = "GAME_ON",
  GAME_START = "GAME_START",
  GAME_GET_READY = "GAME_GET_READY",
  GAME_OVER = "GAME_OVER",
  INITIAL = "INITIAL"
}

interface State {
  value: statusTypes
}

// Define the initial state using that type
const initialState: State = {
  value: statusTypes.MOUNTING,
}

export const slice = createSlice({
  name: 'status',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    update: (state, action: PayloadAction<statusTypes>) => {
      state.value = action.payload
    },
  },
})

export const { update } = slice.actions

// Other code such as selectors can use the imported `RootState` type
export const selector = (state: RootState) => state.status.value

export default slice.reducer