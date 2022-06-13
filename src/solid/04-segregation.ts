/*
 * interface segregation, colocar las interfaces necesarias
    si una clase no utiliza un metodo no se debde de 
    implementar
 */

interface Bird {
  fly(): void;
  eat(): void;
  run(): void;
  
}
interface swimBird {
    swim(): void;
}
class Tucan implements Bird {
  public fly(): void {
    console.log("I'm flying!");
  }
  public eat(): void {
    console.log("I'm eating!");
  }
  public run(): void {}
}

class HummingBird {
  public fly(): void {
    console.log("I'm flying!");
  }
  public eat(): void {
    console.log("I'm eating!");
  }
  public run(): void {}
}

class Penguin implements Bird, swimBird {
    fly(): void {
        throw new Error("Method not implemented.");
    }
    eat(): void {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }
 
    public swim(): void {
    console.log("I'm swimming!");
  }
}
