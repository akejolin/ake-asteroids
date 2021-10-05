
import type {IAsteroids } from './types'
import {CanvasItemTypes} from './types'
import { randomNumBetweenExcluding, randomNumBetween } from 'src/utils/random-functions'
import { asteroidVertices } from 'src/utils/helpers'

type ConstructorProps = {
    addScore?: Function,
    onSound?: Function,
}

export default class Asteroid implements IAsteroids {

    group = CanvasItemTypes.ASTEROIDS
    delete = false
    velocity = {
      x: randomNumBetween(-1.5, 1.5),
      y: randomNumBetween(-1.5, 1.5)
    }
    score = 0
    radius = 80
    rotation = 0
    rotationSpeed = randomNumBetween(-1, 1)
    vertices = asteroidVertices(8, 80)
    position = {
      x: randomNumBetweenExcluding(0, screen.width, 0-60, 0+60),
      y: randomNumBetweenExcluding(0, screen.height, 0-60, 0+60)
    }

    constructor({}:ConstructorProps) {

    }

    create = () => {
      
    }
    addScore = () => {
      
    }
    render = (state: {context: any, screen: any}) => {
      const { context } = state

      
      if (!context) {
        return
      }


      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // Rotation
      this.rotation += this.rotationSpeed;
      if (this.rotation >= 360) {
        this.rotation -= 360;
      }
      if (this.rotation < 0) {
        this.rotation += 360;
      }

      // Screen edges
      if(this.position.x > state.screen.width + this.radius) this.position.x = -this.radius;
      else if(this.position.x < -this.radius) this.position.x = state.screen.width + this.radius;
      if(this.position.y > state.screen.height + this.radius) this.position.y = -this.radius;
      else if(this.position.y < -this.radius) this.position.y = state.screen.height + this.radius;

      context.save();

      context.translate(this.position.x, this.position.y);
      context.rotate(this.rotation * Math.PI / 180);
      context.strokeStyle = '#FFF';
      context.fillStyle = '#ffffff'; // ef404f
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(0, - this.radius);
      for (let i = 1; i < this.vertices.length; i++) {
        context.lineTo(this.vertices[i].x, this.vertices[i].y);
      }
      context.closePath();
      context.clip();
      context.stroke();
      context.fill();
  
      context.restore();
    }

}