
const batman = 'Batman';
const linternaVerde = "Linterna Verde";

console.log(`I'm ${batman}`);
console.log( batman.toUpperCase());
console.log( batman[10]?.toUpperCase() || 'No hay caracteres suficientes') // Sin el ? podriamos obtener un error pese a TS
