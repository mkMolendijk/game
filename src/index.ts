
class Game {

  private static instance : Game;

  private constructor() {}

  public static getInstance() : Game {

    if (!Game.instance) {
      Game.instance = new Game;
    }
    return Game.instance;
  }

  public sayHello() : void{
    alert('hey');
  }
}

Game.getInstance().sayHello();