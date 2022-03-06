
// Una tupla es, a priori, un conjunto de dos datos
const hero: [string, number]= ['Dr Strange', 100];
// Podemos, pese a todo, poner más de dos valores

// hero[0]= 50 // Estoda un error en TS porque asume que el primer valor debe ser string

const hero2: [string, number, boolean]= ['Ironman', 100, true];