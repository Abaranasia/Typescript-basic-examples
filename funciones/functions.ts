(() => {

  const hero: string = 'Flash';

  function returnName():string { //devuelve un string
    return hero
  };

  const activateBatSignal = () => {  // Tipo implícito, TS lo deduce del return aunque esté sin definir
    return "Batseñal activada"
   }

   const heroName = returnName(); // tipo implicito por el return de la función
})()