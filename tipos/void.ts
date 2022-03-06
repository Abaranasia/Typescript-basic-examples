/* void es un tipo de datos que emplea TS para representar que una función no tiene valor de retorno.
El no retorno implícito de una función sería undefined */

function callBatman() {
// Esta definición es igual que function callBatman():void, pero si luego esta función posee un return, TS se quejará
}

const a = callBatman ();
console.log(a) // valor void

const callSuperman = ():void => {
  return undefined // Esto sería equivalente a no devolver nada
}

