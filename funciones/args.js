"use strict";
(() => {
    const fullName = (firstname, lastName) => {
        // Al declarar el tipo de los argumentos, estos se vuelven obligatorios
        return `${firstname} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    /* Ojo: esta validación implícita de repeción de valor se puede esquivar si enviamos:
  
      const noname: any // o string
      fullName (noname, 'Stark')
  
    */
    const fullName2 = (firstname, lastName, upper = false) => {
        // Con ? hacemos que un argumento sea opcional
        if (upper) {
            return `${firstname} ${lastName || '----'}`.toUpperCase();
        }
        else {
            return `${firstname} ${lastName || '----'}`;
        }
        // Sin embargo los args opcionales deben ir al final. 
        // Si, por el contrario, decidimos incluir otro arg obligatorio después, tendremos un problema
        // A menos que tenga un valor por defecto, lo que lo define como opcional  también
    };
})();
