import * as PIXI from 'pixi.js';

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
    this.render(window.innerWidth, window.innerHeight);

    document.body.appendChild(this.renderer.view);
  }

  public render(width : number, height : number, options? : Object) {

    this.renderer = PIXI.autoDetectRenderer(width, height);
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

Game.getInstance().loop();