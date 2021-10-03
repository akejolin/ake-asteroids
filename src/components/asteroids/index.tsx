import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from 'src/store/hooks'

import { decrement, increment } from 'src/store/score/slice'
import { update as updateStatus } from 'src/store/asteroids/status'

import { themes } from './color-theme'

interface ComponentProps {
}

export default ({}: ComponentProps) => {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.score.value)
  const dispatch = useAppDispatch()

/*
      width={this.state.screen.width * this.state.screen.ratio}
      height={this.state.screen.height * this.state.screen.ratio}
*/
  return (
    <canvas
      style={{
        display: 'block',
        backgroundColor: themes[0].background,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
      }}

    />
  )
}