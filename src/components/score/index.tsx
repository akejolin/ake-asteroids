import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from 'src/store/hooks'

import { decrement, increment } from 'src/store/score/slice'

interface ComponentProps {
  tool?: string | 'hej'
}

export default ({tool}: ComponentProps) => {
  // The `state` arg is correctly typed as `RootState` already
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