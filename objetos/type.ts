(() => {

  // Los custom types permited definir tipos muy concretos que podemos reutilizar y actualizar fácilmente
  
  type Hero = { // Custom types
    name: string, 
    age: number, 
    powers?: string[], 
    getName?: () => string
  }
  

  let batman: Hero= {
    name: 'Bruce Wayne',
    age: 45,
    powers: ['none'], // con ? en su definición se convierte en opcional
  }; 

  let superman: Hero = {
    name: 'Clark Kent',
    age: 60,
    powers: ['super speed', 'flight', 'super power'], // con ? en su definición se convierte en opcional
  };
})()