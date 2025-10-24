//1
my_str = "As I lay dying"

function reverse_s(stringg){
    let rev = []
    for (let i = 0; i < stringg.length; i++) {
        rev[i] == stringg[i]

    }

    return rev
}

console.log(reverse_s(my_str))

//2
my_str2 = "As I lay dying"

function contar(letter, stringg){
    let counter = 0
    for (let i = 0; i < stringg.length; i++) {
        if (letter.toLowerCase() == stringg[i]) {
            counter++
        }

    }

    return counter
}

console.log(contar('a',my_str2))

//3
my_str3 = "raear"

function palindromo(stringg){
    counter = stringg.length
    for (let i = 0; i < stringg.length/2; i++) {
        if (stringg[i] != stringg[counter-1]) {
            return false
        }
        counter--;

    }

    return true
}

console.log(palindromo(my_str3))

// 4
function contarVocales(stringg) {
 let vocals = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u':0}

 for (let i = 0; i < stringg.length; i++) {
    switch (stringg[i]) {
        case 'a':
            vocals['a'] += 1;
            break;
        case 'e':
            vocals['e'] += 1;
            break;
        case 'i':
            vocals['i'] += 1;
            break;
        case 'o':
            vocals['o'] += 1;
            break;
        case 'u':
            vocals['u'] += 1;
            break;

        default:
            break;
    }
 }
 return vocals

}

string8 = "Wherever I may roam"

console.log(contarVocales(string8))

// 5

frase = "La palabra es mañana, el día es hoy";

function reemplazar(frase, palabra1, palabra2) {
  let frase3 = frase.split(" ");
  console.log(frase3);

  for (let i = 0; i < frase3.length; i++) {
    if (palabra1 == frase3[i]) {
      return frase.replace(frase3[i], palabra2);
    }
  }
}

console.log(reemplazar(frase, "palabra", "Mike"));




// 6
function capital_palabra(palabra) {
  return palabra.replace(palabra[0], palabra[0].toUpperCase());
}

// console.log(capital_palabra("jack"))

function to_capital(frase) {
  let frase2 = frase.split(" ");

  for (let i = 0; i < frase2.length; i++) {
    frase2[i] = capital_palabra(frase2[i]);
  }
  return frase2.join(" ");
}

frase = "La palabra es mañana, el día es hoy";
console.log(to_capital(frase));



// 7
function contar_letra(sentence, letter){
    let counter = 0
    for (let i = 0; i < sentence.length; i++) {
        if (letter  == sentence.charAt(i)) {
            counter++
        }  
    }

    return counter

}

frase = "La palabra es mañana, el día es hoy";
console.log(contar_letra(frase, 'a'))





