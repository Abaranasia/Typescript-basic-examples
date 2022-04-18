(() => {
// Similar a con los métodos, definir un interface sobre una función es algo infrecuente pero es posible con TS.

  interface addTwoNumbers {
    (a: number, b: number): number;
  };

  let addTwoNumbersFunction: addTwoNumbers;

  addTwoNumbersFunction = (a: number, b: number) => {
    return a+b
  }
})()