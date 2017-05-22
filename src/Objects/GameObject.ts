import appVars from '../config/appVars';

abstract class GameObject {

  public renderable : PIXI.Sprite;
  public vx : number;
  public vy : number;

  constructor(x : number, y : number, image : string) {

    this.renderable = PIXI.Sprite.fromImage(image);
    this.renderable.anchor.set(appVars.defaults.anchor);

    this.renderable.x = x;
    this.renderable.y = y;
    this.renderable.scale.x = appVars.defaults.scale;
    this.renderable.scale.y = appVars.defaults.scale;
  }

  public render() {

  }
}

export default GameObject;