namespace Utils {

  export class Input {

    public static getInput(keyCode : number) : string | boolean {

      enum Directions {
        Up = 87,
        Down = 83,
        Left = 65,
        Right = 68,
      }

      return Directions[keyCode] || false;
    }
  }
}

export default Utils.Input;