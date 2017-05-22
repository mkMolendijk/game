import GameObject from './GameObject';
import PlayableCharacter from '../Interfaces/PlayableCharacter';
import Input from '../Utils/Input';
import appVars from '../config/appVars';
import Idle from '../Behaviours/Idle';
import Moving from '../Behaviours/Moving';
import Behaviour from "../Interfaces/Behaviour";

class Player extends GameObject implements PlayableCharacter{

  private isMoving : string | boolean;
  private behaviour : Behaviour;

  public vx: number = 0;
  public vy: number = 0;

  constructor(x : number, y : number, image : string) {

    super(x, y, image);

    this.behaviour = new Idle(this);
    this.setMovementControls();
  }

  public setMovementControls() : void {

    window.addEventListener("keydown", (e) => {

      this.isMoving = Input.getInput(e.keyCode);
      this.move();
    });

    window.addEventListener('keyup', () => {

      this.isMoving = false;
      this.vx = 0;
      this.vy = 0;

      this.behaviour = new Idle((this));
    })
  }

  public move(vx? : number, vy? : number) {

    if (!this.isMoving) {
      return;
    }

    if (!vx) {
      vx = appVars.defaults.vx;
    }

    if (!vy) {
      vy = appVars.defaults.vy;
    }

    if (this.isMoving === 'Up') {
      this.vy = -vy;
    }

    else if (this.isMoving === 'Down') {
      this.vy = vy;
    }

    else if (this.isMoving === 'Right') {
      this.vx = vx;
    }

    else if (this.isMoving === 'Left') {
      this.vx = -vx;
    }

    this.behaviour = new Moving(this);
  }

  public render() {

    super.render();

    this.behaviour.update();
  }
}

export default Player;