import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from 'src/store/hooks'
import { decrement, increment } from 'src/store/asteroids/score'

interface ComponentProps {
  tool?: string | 'none'
}

export default ({tool}: ComponentProps) => {

  const count = useAppSelector((state) => state.score.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        {count}
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  )
}