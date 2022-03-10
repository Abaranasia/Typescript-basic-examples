(()=> {


  class Avenger {
    constructor (
      public name: string, 
      public realName: string,
    ) {
      console.log('Constructor Avenger invocado')
    }

    protected getFullName() { // funciona solo dentro de la clase o extendidas, nunca desde fuera. Private solo permite ser llamada desde dentro de la clase
      return `${ this.name } ${ this.realName }`
    }
  };

  class Xmen extends Avenger {

    constructor(
      name: string, //no es necesario definir estas props como public
      realName: string,
      public isMutant:boolean)
      {
        super(name, realName); // Debe llamarse lo antes posible
        console.log('Constructor XMen invocado')
      }

      getFullNameDesdeXmen() {
        console.log(super.getFullName())
      };

      get fullName () {
        return `${ this.name } ${ this.realName }`
      };

      set fullName (name: string) {
        this.name = name
      }
  };

  const wolverine = new Xmen('Wolverine', 'Logan', true)

  console.log(wolverine)
  console.log(wolverine.fullName)
  wolverine.fullName= 'Pepe'
  console.log(wolverine.fullName)
})()