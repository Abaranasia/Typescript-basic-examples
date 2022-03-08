"use strict";
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
//# sourceMappingURL=function-type.js.map