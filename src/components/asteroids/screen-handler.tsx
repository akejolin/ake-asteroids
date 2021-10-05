import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useAppSelector, useAppDispatch } from 'src/store/hooks'
import { update } from 'src/store/asteroids/screen'



export default () => {

    const screenState = useAppSelector((state) => state.screen)
    const dispatch = useAppDispatch()
    const handle = (e: UIEvent): void => {
      dispatch(update({
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      }))
    }
    useEffect(() => {
        window.addEventListener('resize',  (e) => handle(e));
        dispatch(update({
          width: window.innerWidth,
          height: window.innerHeight,
          ratio: window.devicePixelRatio || 1,
        }))
      }, [])

    return null
}