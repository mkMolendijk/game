import appVars from '../config/appVars';

class GameObject {

  x : number;
  y : number;

  renderable : PIXI.Sprite;

  constructor(x : number, y : number, image : string) {

    this.renderable = PIXI.Sprite.fromImage(image);
    this.renderable.anchor.set(appVars.defaults.anchor);

    this.renderable.x = x;
    this.renderable.y = y;
    this.renderable.scale.x = appVars.defaults.scale;
    this.renderable.scale.y = appVars.defaults.scale;
  }
}

export default GameObject;