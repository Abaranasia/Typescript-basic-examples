(()=> {
  // Los interfaces no tienen traducción a JS

  interface Client { // Un interface se comporta como un objeto con propiedades, por lo que admite definirlas separadas por ; en lugar de ,
    name: string;
    age?: number;
    address: Address // Es preferible evitar la imbricación mediante la definición de otros interfaces separadas

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
    }
  };

})()