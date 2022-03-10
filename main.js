"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    ;
    const antman = new Avenger('Antman', 'Avengers', 'Scott lang');
    console.log(antman);
    class Avenger2 {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.avgAge;
        }
        ;
        ;
        bio() { return `${this.name} (${this.realName})`; }
        ;
    }
    Avenger2.avgAge = 35;
    ;
    const ironman = new Avenger2('Ironman', 'Avengers', 'Tony Stark');
    console.log(ironman);
    console.log(ironman.bio());
    console.log(Avenger2.getAvgAge());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger invocado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    ;
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor XMen invocado');
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
        ;
        get fullName() {
            return `${this.name} ${this.realName}`;
        }
        ;
        set fullName(name) {
            this.name = name;
        }
    }
    ;
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    console.log(wolverine.fullName);
    wolverine.fullName = 'Pepe';
    console.log(wolverine.fullName);
})();
//# sourceMappingURL=main.js.map