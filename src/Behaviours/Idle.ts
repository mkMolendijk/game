import Behaviour from '../Interfaces/Behaviour';
import GameObject from "../Objects/GameObject";

class Idle implements Behaviour {

  private gameObject : GameObject;

  constructor(gameObject : GameObject) {

    this.gameObject = gameObject;
  }

  update() : void {

  }
}

export default Idle;