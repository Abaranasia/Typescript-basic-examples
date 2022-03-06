"use strict";
/* El tipo never indica que nuestra función no debe terminar con éxito, es decir
no debe tener un punto alcanzable al finalizar su ejecución */
const abc = (message) => {
    throw new Error(message);
};
abc('Auxilio!');
const cde = (message) => {
    if (false) {
        throw new Error(message);
    }
    return 1;
};
