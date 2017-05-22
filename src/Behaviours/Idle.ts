import Behaviour from '../Interfaces/Behaviour';
import GameObject from "../Objects/GameObject";

class Idle implements Behaviour {

  private gameObject : GameObject;

  constructor(gameObject : GameObject) {

    this.gameObject = gameObject;
    this.gameObject.renderable.texture = PIXI.Texture.fromFrame('alien_idle');
  }

  update() : void {

  }
}

export default Idle;