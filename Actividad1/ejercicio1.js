// 1.1
let saludo = "Good Morning!";
console.log(saludo);

// 1.2
let myEdad = 80;
console.log(saludo);

// 1.3
let esCierto = true;
console.log(esCierto);

// 1.4
let queDia = null;
console.log(queDia);

let solucion = undefined;
console.log(solucion);

// 1.5
const myCar = {
    name:"BMW", 
    price:45000, 
    category:"coupé"}

console.log(myCar)
console.log("")
console.log(`Mi coche es un ${myCar.name},
    esta ${myCar.price}$ y es de la categoría ${myCar.category}`)

// 1.6
const myArray = ["Monday", "Friday", "Sunday"];
console.log(myArray);

// 1.7
let myColor = "azul";
console.log(myColor);
myColor = "rojo";
console.log(myColor);

// 1.8
let myTest;
console.log(myTest);
myTest = null;
console.log(myTest);

// 1.9
let a = 20;
console.log("a -> global");
function myFunction(a,b) { 
    // let a = 7 -> esto daría error
    let sum;
    console.log("a -> local, daría error")
    return sum =a+b}
myFunction(12,27)


// 1.10
let w = 12;
console.log(w);
// let 1v = 20;  -> da error por empezar variable con un número
//console.log(1v)
// let my-variable = "house";  -> da error porque uso un '-' en el nombre de la variable
//console.log(my-variable)

const m = 13;
console.log(m);
//const m = 12  -> da error al volver a incializar la misma variable usando 'const'


var otraVar = "casa";
console.log(otraVar);
var otraVar = 19;
console.log(otraVar);

// 1.11
let x = 19
let y = 21
let z = -3

console.log(x + y)
console.log(z - y)
console.log(x * z)
console.log(x / y)
console.log(y + z)
console.log(x++)
console.log(y--)

// 1.12
let myString = "Buenos \ndías, \tadiós";
console.log(myString)
