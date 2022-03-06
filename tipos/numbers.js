"use strict";
// let avengers:number;  // ERROR (*)
let avengers = 20;
const villians = 20;
if (avengers < villians) { // possibility of undefine (*)
    console.log('Desventaja');
}
else {
    console.log('ventaja');
}
;
/* Este problema es dificil de detectar en javascript, mostrando el primer console,
 * mientras ts lo arroja: un valor sin tipo definido no debe ser empleado a la ligera, pero además
 * aunque esté definido, si es undefined, no debe emplearse en este tipo de comparaciones,
 * donde Js lo detectaría como un valor siempre inferior al del otro operando de la comparación */
avengers = Number('55A'); // se traduce como NaN
// Esto colaría para TS porque NaN es considerado de tipo Number. Tocaría comprobarlo
