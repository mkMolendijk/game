import * as PIXI from 'pixi.js';

/**
 * Core Game
 * Used to start the loop and render the canvas.
 * Starts PIXI rendering engine.
 */
class Game {

  private static instance : Game;

  public game: PIXI.Application;

  private constructor() {

    this.game = new PIXI.Application();

    document.body.appendChild(this.game.view);
  }

  public static getInstance() : Game {

    if (!Game.instance) {
      Game.instance = new Game;
    }
    return Game.instance;
  }

  public loop = () => {

    window.requestAnimationFrame(this.loop);
  }
}

Game.getInstance().loop();