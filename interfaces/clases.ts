(() => {
// los interfaces pueden ser usados desde clases, pero no pueden extender de ellas dado que no son clases por sí mismas, solo pueden ser implementadas

  interface Xmen {
    id: number;
    name: string;
    fullName ( id: number ): string;
  };

interface Human {
  realName: string;
  age: number;
}

  class Mutant implements Xmen, Human {
    // Podemos definir aquí las propiedades o, de forma más común, directamente en el constructor

 /* public id: number; 
    public age: number;
    public name: string;
    public realName: string; */

    fullName (id:number){
      return this.name + ' is: '+ this.realName
    };

    constructor(
      public id: number,
      public age: number,
      public name: string,
      public realName: string
    ) {
      this.id= id;
      this.age= age;
      this.name= name;
      this.realName= realName;
    }

  }
})()