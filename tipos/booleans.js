"use strict";
let isOk = true;
let isPrintable = false;
//isOk = (isPrintable) ? true: 'false'; // ERROR (*)
isOk = (isPrintable) ? true : false;
/* No debemos devolver como resultado de un ternario dos posiblestipos distintos
 * Este error no es fácil de detectar en JS pero TS lo detecta:
 * si el valor está definido como booleano, su retorno no puede ser de otro tipo */ 
