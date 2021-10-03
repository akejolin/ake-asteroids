import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'src/store'

// Define a type for the slice state
interface State {
  value: number
}

// Define the initial state using that type
const initialState: State = {
  value: 0,
}

export const slice = createSlice({
  name: 'lives',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount, decrementByAmount } = slice.actions

// Other code such as selectors can use the imported `RootState` type
export const selector = (state: RootState) => state[slice.name].value

export default slice.reducer