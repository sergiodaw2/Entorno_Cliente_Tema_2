// 2.1
let otroNum = -18;

function esPositivo(a) {
  if (a === 0) {
    console.log(`${a} vale 0`);
  } else if (a > 0) {
    console.log(`${a} es positivo`);
  } else {
    console.log(`${a} es negativo`);
  }
}

esPositivo(otroNum);

// 2.2

let tuEdad = 27;

function esAdulto(edad) {
  if (edad <= 0) {
    console.log("no válido");
  }

  if (edad < 18) {
    console.log("menor de edad");
  } else if (edad >= 18 && edad < 70) {
    console.log("es usted un adulto");
  } else {
    console.log("es usted un anciano");
  }
}

console.log(esAdulto(tuEdad));

// 2.3
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// 2.4
let i = 0;
while (i < 4) {
  console.log(i);
  i++;
}

// 2.5
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 4);

// 2.6
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i == 3) {
    break;
  }
}

// 2.7
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i == 2) {
    continue;
  }
}
// 2.8

let num = 9;
function queMes(num2) {
  let mes;
  switch (num2) {
    case 1:
      mes = "Enero";
      break;
    case 2:
      mes = "Febrero";
      break;
    case 3:
      mes = "Marzo";
      break;
    case 4:
      mes = "Abril";
      break;
    case 5:
      mes = "Maya";
      break;
    case 6:
      mes = "Junio";
      break;
    case 7:
      mes = "Julio";
      break;
    case 8:
      mes = "Agosto";
      break;
    case 9:
      mes = "Septiembre";
      break;
    case 10:
      mes = "Octubre";
      break;
    case 11:
      mes = "Noviembre";
      break;
    case 12:
      mes = "Diciembre";
      break;
    default:
      mes ="introduce un numero entre 0-11";
  }
  return mes;
}

console.log(queMes(num));
