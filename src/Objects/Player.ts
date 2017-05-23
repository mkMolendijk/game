import GameObject from './GameObject';
import PlayableCharacter from '../Interfaces/PlayableCharacter';
import Input from '../Utils/Input';
import Idle from '../Behaviours/Idle';
import Moving from '../Behaviours/Moving';
import Behaviour from "../Interfaces/Behaviour";

class Player extends GameObject implements PlayableCharacter{

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

      if (this.isMoving) {
        this.behaviour = new Moving(this);
      }
    });

    window.addEventListener('keyup', () => {

      this.isMoving = false;
      this.vx = 0;
      this.vy = 0;

      this.behaviour = new Idle((this));
    })
  }

  public render() : void {

    super.render();

    this.behaviour.update();
  }
}

export default Player;