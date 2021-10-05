import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'

import { useAppSelector, useAppDispatch } from 'src/store/hooks'
import {
  statusTypes as gameStatusTypes,
  update as gameStatusUpdate,
 } from 'src/store/asteroids/status'

 import { add as canvasAdd } from 'src/store/asteroids/canvas'
 import { update as contextUpdate } from 'src/store/asteroids/canvasContext'


import { themes } from './color-theme'
import KeyHandler  from './keys'
import ScreenHandler  from './screen-handler'


import Engine from './engine'
import Asteroid from './engine/asteroid'

type ComponentProps = {}

export default ({}: ComponentProps) => {
  // The `state` arg is correctly typed as `RootState` already
  const colorThemeIndex = useAppSelector((state) => state.colorTheme.value)
  const gameStatusState = useAppSelector((state) => state.status.value)
  const keyState = useAppSelector((state) => state.keys.value)
  const screen = useAppSelector((state) => state.screen.value)
  const dispatch = useAppDispatch()
  let canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<any>(null)
  useEffect(() => {
    if (canvasRef.current) {
      const _context = canvasRef.current.getContext('2d')
      //const context = canvasRef.canvas.getContext('2d')
      if (_context) {
        setContext(_context)
      }
    }
  }, [])

  useEffect(() => {
    dispatch(gameStatusUpdate(gameStatusTypes.INITIAL))
  }, [context])


  useEffect(() => {
    switch (gameStatusState) {
      case gameStatusTypes.MOUNTING:
        // do nothing
        break;
      case gameStatusTypes.INITIAL:
        startInitialState()
        break;
      case gameStatusTypes.GAME_ON:
        // onGame()
        break;
      case gameStatusTypes.GAME_START:
        //startGame()
        break;
      case gameStatusTypes.GAME_GET_READY:
        //startContinue()
        /*
        setTimeout(() => {
          this.setState({
            readyforNextLife: true,
          })
        }, 1000)
        */
        break;
      case gameStatusTypes.GAME_OVER:
        //gameOver()
        break;
    }

  }, [gameStatusState])

  useLayoutEffect(() => {
    return () => {
        // Your code here.
    }
}, [])


  const startInitialState = () => {
    createAsteroids(3)



  }

  const createAsteroids = (amount:number) => {
    for (let i = 0; i < amount; i++) {
      let item = new Asteroid({
        addScore: () => {},
        onSound: () => {},
      })
      dispatch(canvasAdd(item));
    }
  }


  return (
    <React.Fragment>
      <KeyHandler />
      <ScreenHandler />
      <Engine context={context}/>
      <canvas
        id="canvas-board"
        ref={canvasRef}
        style={{
          display: 'block',
          backgroundColor: themes[colorThemeIndex].background,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
        }}
        width={screen.width * screen.ratio}
        height={screen.height * screen.ratio}
      />
    </React.Fragment>
  )
}