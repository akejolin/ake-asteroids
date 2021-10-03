import { configureStore } from '@reduxjs/toolkit'
import score from './asteroids/score'
import status from './asteroids/status'
import statusNewUfo from './asteroids/status-new-ufo'
import statusNewUpgrade from './asteroids/status-new-upgrade'
import lives from './asteroids/lives'
import level from './asteroids/level'
import numAsteroids from './asteroids/num-asteroids'
import shield from './asteroids/shield'
import shieldFuel from './asteroids/shield-fuel'
import upgradeFuel from './asteroids/upgrade-fuel'
import colorTheme from './asteroids/color-theme'


export const store = configureStore({
  reducer: {
    score,
    status,
    lives,
    level,
    numAsteroids,
    shield,
    shieldFuel,
    upgradeFuel,
    statusNewUfo,
    statusNewUpgrade,
    colorTheme,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch