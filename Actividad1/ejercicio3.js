// 3.1

let cirRadio1 = prompt("introduce el radio del circulo: ")
let cirRadio = parseFloat(cirRadio1);

function cirArea(radio) {
  return  Math.PI * Math.pow(radio,2)
}

function cirPer(radio) {
  return  Math.PI * radio * 2
}

console.log(`el area de círculo es: ${cirArea(cirRadio).toFixed(2)}`);
console.log(`el perímetro del círculo es: ${cirPer(cirRadio).toFixed(2)}`);



// 3.2

function calPower(base, exponente) {
  return  base ** exponente;
}

console.log(`El resultado: ${calPower(9,7)}`);




