"use strict";
(() => {
    const msg = 'Hola mundo';
    console.log(msg);
    const a = 10;
    console.log(a);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let fuerza;
    (function (fuerza) {
        fuerza[fuerza["acuaman"] = 0] = "acuaman";
        fuerza[fuerza["batman"] = 1] = "batman";
        fuerza[fuerza["flash"] = 5] = "flash";
        fuerza[fuerza["superman"] = 100] = "superman";
    })(fuerza || (fuerza = {}));
    const fuerzaFlash = fuerza.flash;
    const fuerzaSuperman = fuerza.superman;
    const fuerzaBatman = fuerza.batman;
    const fuerzaAcuaman = fuerza.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log((largoDelPoder));
})();
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
})();
(() => {
    const fullName = (firstname, lastName) => {
        return `${firstname} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    const fullName2 = (firstname, lastName, upper = false) => {
        if (upper) {
            return `${firstname} ${lastName || '----'}`.toUpperCase();
        }
        else {
            return `${firstname} ${lastName || '----'}`;
        }
    };
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `hola ${name}`;
    const saveTheWorld = () => 'El mundo está salvado';
    let myFunction;
    myFunction = 10;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Pepito'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    ;
    const activateBatSignal = () => {
        return "Batseñal activada";
    };
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super speed', 'time travel']
    };
    let batman = {
        name: 'Bruce Wayne',
        age: 45,
        powers: ['none'],
    };
    batman = {
        name: 'Pipo',
        age: 25,
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: 'Bruce Wayne',
        age: 60,
        powers: ['super speed'],
    };
})();
(() => {
    let batman = {
        name: 'Bruce Wayne',
        age: 45,
        powers: ['none'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['super speed', 'flight', 'super power'],
    };
})();
(() => {
    let myCustomVar = 'Pipo';
})();
let avenger = 123;
let exists;
let power;
avenger = 'Dr Stange';
console.log(avenger.charAt(0));
console.log(avenger.charAt(0));
avenger = 150.12;
console.log(avenger.toFixed(2));
console.log(avenger.toFixed(2));
const numbers = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
numbers.push(11);
console.log(numbers);
const numeros = ['uno', 'dos', 'tres'];
numeros.forEach(v => console.log(v.toUpperCase()));
let isOk = true;
let isPrintable = false;
isOk = (isPrintable) ? true : false;
var AudioLevel;
(function (AudioLevel) {
    AudioLevel[AudioLevel["min"] = 0] = "min";
    AudioLevel[AudioLevel["medium"] = 1] = "medium";
    AudioLevel[AudioLevel["max"] = 2] = "max";
})(AudioLevel || (AudioLevel = {}));
let currentAudio = AudioLevel.medium;
let otherAudio = 10;
console.log(currentAudio);
console.log(AudioLevel);
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
let avengers = 20;
const villians = 20;
if (avengers < villians) {
    console.log('Desventaja');
}
else {
    console.log('ventaja');
}
;
avengers = Number('55A');
var _a;
const batman = 'Batman';
const linternaVerde = "Linterna Verde";
console.log(`I'm ${batman}`);
console.log(batman.toUpperCase());
console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No hay caracteres suficientes');
const hero = ['Dr Strange', 100];
const hero2 = ['Ironman', 100, true];
function callBatman() {
}
const a = callBatman();
console.log(a);
const callSuperman = () => {
    return undefined;
};
//# sourceMappingURL=main.js.map