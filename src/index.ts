import * as PIXI from 'pixi.js';
import appVars from './config/appVars';
import Player from './Objects/Player';

import './style/main.css';

/**
 * Core Game
 * Used to start the loop and render the canvas.
 * Starts PIXI rendering engine.
 */
class Game {

  private static instance : Game;
  private renderer : any;

  public game : PIXI.Application;

  private constructor() {

    this.game = new PIXI.Application();

    this.load();
  }

  private load() : void {

    const loader = PIXI.loader;

    loader.add('alien', appVars.paths.sprites + appVars.sprites.alien.src);
    loader.load(() => this.onAssetsLoaded());
  }

  private onAssetsLoaded() : void {

    this.render(window.innerWidth, window.innerHeight);
  }

  public render(width : number, height : number, options? : Object) {

    this.renderer = PIXI.autoDetectRenderer(width, height);
    document.body.appendChild(this.renderer.view);

    const stage = new PIXI.Container();
    const player = new Player(window.innerWidth / 2, window.innerHeight / 2, 'alien');

    stage.addChild(player.renderable);

    this.renderer.render(stage);
    this.loop();
  }

  public static getInstance() : Game {

    if (!Game.instance) {
      Game.instance = new Game;
    }
    return Game.instance;
  }

  public loop : () => void = () : void => {

    window.requestAnimationFrame(this.loop);
  }
}

Game.getInstance();