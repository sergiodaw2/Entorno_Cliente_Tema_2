// 4.1

let cantidadNums = parseInt(prompt("introduce la cantidad de números:  "));
let numArray = [];
//pasar de string a Array

for (let i = 0; i < cantidadNums; i++) {
  let numero = parseInt(prompt("introduce un número:  "));
  numArray.push(numero);
}

function findLargestNumber(unArr) {
  let max = unArr[0];
  for (let i = 1; i < unArr.length; i++) {
    if (max < unArr[i]) {
      max = unArr[i];
    }
  }
  return max;
}

console.log(myArray);
console.log(`El mayor número es de mi array es: ${findLargestNumber(myArray)}`);

