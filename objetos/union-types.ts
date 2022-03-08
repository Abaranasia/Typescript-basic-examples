(()=> {

  type Hero = { // Custom types
    name: string, 
    age: number, 
    powers?: string[], 
    getName?: () => string
  }
  let myCustomVar: (string | number | Hero) = 'Pipo';

  // Esta variable puede ser de varios tipos y nos mostrará la ayuda de todos ellos si intentamos emplearla
})()