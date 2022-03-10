(()=> {

  // version clásica
  class Avenger {
    
    private name: string; // no accesible desde el objeto.
    public team: string;
    public realName: string;
    static avgAge: number = 35; // esta propiedad, siendo estática, solo se ve invocando la clse, no un objeto 

     constructor( name: string, team: string, realName: string ){
      this.name= name;
      this.team=team;
      this.realName= realName; 
    }
  };

  const antman: Avenger = new Avenger('Antman', 'Avengers', 'Scott lang');
  console.log(antman)



  // version corta
  class Avenger2 { 
    
    static avgAge: number = 35; 
    static getAvgAge() {
      return this.avgAge
    };

    constructor( 
      private name: string, 
      public team: string, 
      public realName: string,
       ){
         //Avenger2.avgAge= avgAge
    };

    // Método público
    public bio () { return `${ this.name} (${this.realName})`};
    // Podríamos ahcerlo privado y la llamada daría un error, pero la transpilación mostraría igual el resultado porque en JS es imposible limitar eso

  };

  const ironman: Avenger2 = new Avenger2('Ironman', 'Avengers', 'Tony Stark');
  console.log(ironman)
  console.log(ironman.bio())
  console.log(Avenger2.getAvgAge())

})();
