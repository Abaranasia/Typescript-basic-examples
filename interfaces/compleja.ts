(()=> {
  // Los interfaces no tienen traducción a JS

  interface Client { // Un interface se comporta como un objeto con propiedades, por lo que admite definirlas separadas por ; en lugar de ,
    name: string;
    age?: number;
    address: Address; // Es preferible evitar la imbricación mediante la definición de otros interfaces separadas
    getFullAddress ( id: string ): void; // Los métodos definidos en un interface debe definir el tipo de su retorno con :
    // Un interface, a diferencia de las clases, no implementa sus métodos, solo los define, quedando su implementación en manos de quien la use
  };

  interface Address {
      id: number;
      zip: string;
      city: string;
  };


  const client = {
    name: 'Pepe',
    age: 35,
    address: {
      id: 125,
      zip: 'KY2 SUD',
      city: 'Ottawa'
    },
    getFulAddress(id: string) {
      return this.address.city
    }
  };

})()