
/* El tipo never indica que nuestra función no debe terminar con éxito, es decir
no debe tener un punto alcanzable al finalizar su ejecución */

const abc = (message:string):never => { 
  throw new Error(message)
 }

 abc('Auxilio!')

 const cde = (message:string):(never | number) => {  // Si, como alternativa, debe poder devolver algo, debe indicarse con | 
  
  if (false) {
    throw new Error(message)
  }

  return 1;
 }