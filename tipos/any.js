"use strict";
// Evitar el uso del tipo any salvo en caso de fuerza mayor
let avenger = 123; // Acepta cualquier tipo de dato, es como no definir el tipo
//const exists;  // Una const debe estar inicializada SIEMPRE
let exists;
let power;
avenger = 'Dr Stange'; // aunque sea u string, no obtiene el autocomplete de sus métodos
console.log(avenger.charAt(0)); // No obtengo la ayuda
console.log(avenger.charAt(0)); // Casteando a tipo string sí obtenemos la ayuda
avenger = 150.12; // Acepta number ahora
console.log(avenger.toFixed(2)); // No obtengo la ayuda
console.log(avenger.toFixed(2)); // Casteando a tipo number sí obtenemos la ayuda
