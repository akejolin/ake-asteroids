import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'src/store'

// Define a type for the slice state
interface State {
  value: boolean
}

// Define the initial state using that type
const initialState: State = {
  value: false,
}

export const slice = createSlice({
  name: 'shield',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    update: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
    toogle: (state) => {
      state.value = !state.value
    },
  },
})

export const { update } = slice.actions

// Other code such as selectors can use the imported `RootState` type
export const selector = (state: RootState) => state.status.value

export default slice.reducer