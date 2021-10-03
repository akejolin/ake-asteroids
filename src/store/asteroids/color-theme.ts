import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'src/store'
import { randomInterger } from 'src/utils/random-functions'
import { themes } from 'src/components/asteroids/color-theme'

// Define a type for the slice state
interface State {
  value: number
}

// Define the initial state using that type
const initialState: State = {
  value: randomInterger(0, themes.length - 1 ),
}

export const slice = createSlice({
  name: 'colorTheme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    randomSet: (state) => {
      state.value = randomInterger(0, themes.length - 1 )
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { setValue, randomSet } = slice.actions

// Other code such as selectors can use the imported `RootState` type
export const selector = (state: RootState) => state[slice.name].value

export default slice.reducer