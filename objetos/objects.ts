(() => {

  let flash = {
    name: 'Barry Allen',
    age: 24,
    powers: ['super speed', 'time travel']
  }; 
  // TS infiere los tipos para estas propiedades y no es necesario indicarlos. 
  // Si luego le asignamos valores de otros tipos, se quejará

  /* flash = {
    name2: 'otro'
  } */ // Esto lanza un error porque no es un campo declarado con anterioridad


  let batman: {name: string, age: number, powers?: string[], getName?: () => string } = {
    name: 'Bruce Wayne',
    age: 45,
    powers: ['none'], // con ? en su definición se convierte en opcional
  }; 

  batman= {
    name: 'Pipo',
    age: 25,
    getName() {
      return this.name
    }
  };

  let superman: {name: string, age: number, powers?: string[], getName?: () => string } = {
    name: 'Bruce Wayne',
    age: 60,
    powers: ['super speed'], // con ? en su definición se convierte en opcional
  };
})()