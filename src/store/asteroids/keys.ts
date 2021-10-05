import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'src/store'

// Define a type for the slice state

export interface Ikeys {
  left  : boolean,
  right : boolean,
  up    : boolean,
  down  : boolean,
  space : boolean,
  return: boolean,
  weapon: boolean,
}


export interface State {
  value: Ikeys
}

// Define the initial state using that type
const initialState: State = {
  value: {
    left  : false,
    right : false,
    up    : false,
    down  : false,
    space : false,
    return: false,
    weapon: false,
  }
}

export const slice = createSlice({
  name: 'keys',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    update: (state, action: PayloadAction<Ikeys>) => {
      state.value = action.payload
    },
  },
})

export const { update } = slice.actions

// Other code such as selectors can use the imported `RootState` type
export const selector = (state: RootState) => state[slice.name].value

export default slice.reducer