"use strict";
const numbers = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10]; // Al no definir un tipo inicial, TS lo infiere y dice que es un array de numbers y strings
//numbers.push(true); // No puede, a menos que definamos el array que también acepta booleans
// const numbers: (number | string | boolean) []
numbers.push(11);
console.log(numbers);
const numeros = ['uno', 'dos', 'tres'];
numeros.forEach(v => console.log(v.toUpperCase())); // TS infiere que los datos del array son strings y ofrece la ayuda de string
