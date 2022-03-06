/* El tipo de datos enum es como un array asociativo inverso donde 
lo que definimos es el contenido y su ínidice viene definido por su posición */

enum AudioLevel {
  min, 
  medium,
  max // También podemos definir el valor maunualmente: max = 10
}

let currentAudio = AudioLevel.medium; 
let otherAudio:AudioLevel= 10; // nos permite añadirle nuevos valores siempre que sean numéricos porque en el fondo es una serie de números

console.log(currentAudio) // Devuelve el valor 2
console.log(AudioLevel) // Devuelve el siguiente objeto: {0: "min", 1: "medium", 2: "max"}