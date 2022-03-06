"use strict";
/* El tipo de datos enum es como un array asociativo inverso donde
lo que definimos es el contenido y su ínidice viene definido por su posición */
var AudioLevel;
(function (AudioLevel) {
    AudioLevel[AudioLevel["min"] = 0] = "min";
    AudioLevel[AudioLevel["medium"] = 1] = "medium";
    AudioLevel[AudioLevel["max"] = 2] = "max"; // También podemos definir el valor maunualmente: max = 10
})(AudioLevel || (AudioLevel = {}));
let currentAudio = AudioLevel.medium;
let otherAudio = 10; // nos permite añadirle nuevos valores siempre que sean numéricos porque en el fondo es una serie de números
console.log(currentAudio); // Devuelve el valor 2
console.log(AudioLevel); // Devuelve el siguiente objeto: {0: "min", 1: "medium", 2: "max"}
