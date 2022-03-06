(() => {

  const addNumbers = (a: number, b: number) => a+b;
  const greet = (name: string) => `hola ${name}`;
  const saveTheWorld = () => 'El mundo está salvado';

  let myFunction;
  // let myFunction: Function;

  myFunction = 10; //no Definimos un tipo pero asume que es number por el valor

  myFunction= addNumbers // Asimila los tipos de addNumbers
  console.log(myFunction(1, 2)) // Resuelve la suma correctamente

  myFunction = greet;
  console.log(myFunction('Pepito')) // Asume que es de tipo string

  myFunction = saveTheWorld;
  console.log(myFunction()) // Devuelve string

  /** Este tipo de asignación, pasando funciones por referencia, es muy común en JS
   *  Sin embargo hacerlo así, tal como está, implica que myFunction sea de tipo any para adaptarse, lo cual no es muy correcto
   * Una forma más correcta de darle formato a myFuction sería definirla de tipo function, pero entonces
   * TS nos daría error en la primera asignación, myFunction=10, porque ese valor no es una función, sino un valor simple
   */

/** También existe este tipo de definición:
 * cont myFunction: () => number
 * según la cual estamos declarando que esta función va a retornar valores de tipo number
 * También podemos definir la entrada:
 * cont myFunction: (x: number, y: number) => number
 * Donde los nombres de las variables no son importantes, solo sus tipos
 * De ser así solo serviría la referencia de addNumbers y las otras darían error
 * Para las de texto sería similar:
 * cont myFunction: (x: string) => string
*/
})()