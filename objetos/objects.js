"use strict";
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
//# sourceMappingURL=objects.js.map