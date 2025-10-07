// 5.1

for (let i = 20; i < 31; i++) {
  console.log(i);
}

console.log(" ");
console.log("*********");
console.log(" ");

for (let i = 30; i <= 50; i++) {
  console.log(i);
}

console.log(" ");
console.log("*********");
console.log(" ");

let sum = 0;
for (let i = 0; i < 51; i++) {
  sum += i;
}
console.log(sum);

console.log(" ");
console.log("*********");
console.log(" ");

for (let i = 0; i < 11; i++) {
  console.log(`8 X ${i} = ${i * 8}`);
}

console.log(" ");
console.log("*********");
console.log(" ");

const myArray3 = [1, 2, 7, 9, 12, 34, -2];

for (let i = 0; i < myArray3.length; i++) {
  console.log(myArray3[i]);
}

for (let i = 1; i <= 9; i++) {
  let fila = "";
  for (let j = 1; j <= i; j++) {
    fila += "*";
  }

  console.log(fila);
}

let sum2 = 0;
for (let i = 0; i < 51; i++) {
  if (i % 2 == 0) sum2 += i;
}
console.log(sum2);

for (let i = 30; i > 19; i--) {
  console.log(i);
}

const myArray2 = [1, 2, 7, 9, 12, 34, -2];
let sum3 = 0;
for (let i = 0; i < myArray2.length; i++) {
  sum3 += myArray2[i];
}
console.log(sum3 / myArray2.length);
