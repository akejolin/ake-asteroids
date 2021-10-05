import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'src/store'

import type { ICanvasObject } from 'src/components/asteroids/engine/types'

// Define a type for the slice state
interface State {
  value: ICanvasObject[]
}

// Define the initial state using that type
const initialState: State = {
  value: [],
}

export const slice = createSlice({
  name: 'canvas',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    update: (state, action: PayloadAction<[]>) => {
      state.value = action.payload
    },
    add: (state, action: PayloadAction<ICanvasObject>) => {
      state.value.push(action.payload)
    },
    remove: (state, action: PayloadAction<any>) => {
      state.value.splice(action.payload, 1);
    },
  },
})

export const { update, add, remove } = slice.actions

// Other code such as selectors can use the imported `RootState` type
export const selector = (state: RootState) => state[slice.name].value

export default slice.reducer