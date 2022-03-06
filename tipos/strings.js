"use strict";
var _a;
const batman = 'Batman';
const linternaVerde = "Linterna Verde";
console.log(`I'm ${batman}`);
console.log(batman.toUpperCase());
console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No hay caracteres suficientes'); // Sin el ? podriamos obtener un error pese a TS
