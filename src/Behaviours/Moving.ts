import Behaviour from '../Interfaces/Behaviour';
import GameObject from "../Objects/GameObject";
import appVars from '../config/appVars';

class Moving implements Behaviour {

  private gameObject : GameObject;

  constructor(gameObject : GameObject) {

    this.gameObject = gameObject;
    this.gameObject.renderable.texture = PIXI.Texture.fromFrame('alien_moving');
  }

  public update() : void {

    if (!this.gameObject.isMoving) {
      return;
    }

    this.move();

    this.gameObject.renderable.x += this.gameObject.vx;
    this.gameObject.renderable.y += this.gameObject.vy;

  }

  public move(vx? : number, vy? : number) : void {

    if (!vx) {
      vx = appVars.defaults.vx;
    }

    if (!vy) {
      vy = appVars.defaults.vy;
    }

    if (this.gameObject.isMoving === 'Up') {
      this.gameObject.vy = -vy;
    }

    else if (this.gameObject.isMoving === 'Down') {
      this.gameObject.vy = vy;
    }

    else if (this.gameObject.isMoving === 'Right') {
      this.gameObject.vx = vx;
    }

    else if (this.gameObject.isMoving === 'Left') {
      this.gameObject.vx = -vx;
    }
  }
}

export default Moving;