import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'src/store'

interface State {
  value: any
}

// Define the initial state using that type
const initialState: State = {
  value: null,
}

export const slice = createSlice({
  name: 'context',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    update: (state, action: PayloadAction<any>) => {
        state.value = action.payload
    },
  },
})

export const { update } = slice.actions

// Other code such as selectors can use the imported `RootState` type
export const selector = (state: RootState) => state[slice.name].value

export default slice.reducer