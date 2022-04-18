"use strict";
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
    ;
    class Mutant {
        constructor(id, age, name, realName) {
            this.id = id;
            this.age = age;
            this.name = name;
            this.realName = realName;
            this.id = id;
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        fullName(id) {
            return this.name + ' is: ' + this.realName;
        }
        ;
    }
})();
(() => {
    ;
    ;
    const client = {
        name: 'Pepe',
        age: 35,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFulAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    ;
    let addTwoNumbersFunction;
    addTwoNumbersFunction = (a, b) => {
        return a + b;
    };
})();
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
;
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
;
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor() {
        this.nombre = "";
        this.edad = 0;
        this.sexo = "";
        this.estadoCivil = ";";
    }
    imprimirBio() {
    }
}
//# sourceMappingURL=main.js.map