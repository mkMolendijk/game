import * as PIXI from 'pixi.js';
import appVars from '../config/appVars';
import Player from '../Objects/Player';
import GameObject from "../Objects/GameObject";

/**
 * Core Game
 * Used to start the loop and render the canvas.
 * Starts PIXI rendering engine.
 */
class Game {

  private static instance : Game;
  private renderer : any;
  private stage : PIXI.Container;

  public renderQueue : Array<GameObject> = [];

  private constructor() {

    this.load();
  }

  public static getInstance() : Game {

    if (!Game.instance) {
      Game.instance = new Game;
    }
    return Game.instance;
  }

  private load() : void {

    const loader = PIXI.loader;

    loader.add('alien_idle', appVars.paths.sprites + appVars.sprites.alien.idle);
    loader.add('alien_moving', appVars.paths.sprites + appVars.sprites.alien.moving);
    loader.load(() => this.onAssetsLoaded());
  }

  private onAssetsLoaded() : void {

    this.render(window.innerWidth, window.innerHeight);
  }

  public render(width : number, height : number, options? : Object) : void {

    this.renderer = PIXI.autoDetectRenderer(width, height);
    document.body.appendChild(this.renderer.view);

    this.stage = new PIXI.Container();
    const player : Player = new Player(window.innerWidth / 2, window.innerHeight / 2, 'alien_idle');

    this.renderQueue.push(player);
    this.stage.addChild(player.renderable);

    this.renderer.render(this.stage);
    requestAnimationFrame(this.loop);
  }

  public loop : () => void = () : void => {

    this.renderQueue.map((item) => item.render());

    this.renderer.render(this.stage);

    requestAnimationFrame(this.loop);
  }
}

export default Game;