import Behaviour from '../Interfaces/Behaviour';
import GameObject from "../Objects/GameObject";

class Moving implements Behaviour {

  private gameObject : GameObject;

  constructor(gameObject : GameObject) {

    this.gameObject = gameObject;
  }

  update() : void {

    this.gameObject.renderable.x += this.gameObject.vx;
    this.gameObject.renderable.y += this.gameObject.vy;
  }
}

export default Moving;