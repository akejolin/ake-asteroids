import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from 'src/store/hooks'
import {
  statusTypes as gameStatusTypes,
  update as gameStatusUpdate,
 } from 'src/store/asteroids/status'
 import {
   add as canvasAdd,
   remove as canvasRemove,
 } from 'src/store/asteroids/canvas'

 import type { ICanvasObject } from './types'
 import { themes } from '../color-theme'


type ComponentProps = {
  context: any
}
const Engine = ({context}: ComponentProps) => {
  const dispatch = useAppDispatch()
  const canvasItems = useAppSelector((state) => state.canvas.value)
  //const context = useAppSelector((state) => state.context.value)
  const screen = useAppSelector((state) => state.screen.value)
  const colorThemeIndex = useAppSelector((state) => state.colorTheme.value)

  useEffect(() => {
    requestAnimationFrame(() => update());
    dispatch(gameStatusUpdate(gameStatusTypes.INITIAL))
  }, [])

  const update = ():void => {
    // Next frame

    // Context update
    if (context) {
      context.save();
      //context.scale(this.state.screen.ratio, this.state.screen.ratio);
      context.scale(1,1)
      // Motion trail
      context.fillStyle = themes[colorThemeIndex].background
      context.globalAlpha = 0.4;
      context.fillRect(0, 0, screen.width, screen.height);
      context.globalAlpha = 1;
    }
    updateObjects(canvasItems)
    requestAnimationFrame(() => update())
  }
  const updateObjects = (items: ICanvasObject[]) => {
    let index = 0;
    for (let item of items) {
      if (item.delete) {
        dispatch(canvasRemove(index))
      } else {
        items[index].render({context, screen});
      }
      index++;
    }
  }

  return null
}

export default Engine
