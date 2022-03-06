(() => {

  const fullName = (firstName: string, ...rest: string[]): string => {
// ...rest es, en esencia, un array con el resto de argumentos que se le envíen 
// y como tal merece definición, en este caso un array de strings

    return `${firstName} ${rest.join(' ')}` // Tenemos acceso al método .join() de los arrays que me permitirá concatenar los valores insrertando un espacio entre ellos
  }

  const superman = fullName('Clark', 'Joseph', 'Kent');
})()