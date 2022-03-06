"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    ;
    const activateBatSignal = () => {
        return "Batseñal activada";
    };
    const heroName = returnName(); // tipo implicito por el return de la función
})();
