function rdm_0_9() {
    return Math.floor(Math.random() * (9 - 0 + 1)) + 0
}

function rdm_1_10() {
    return Math.floor(Math.random() * (10 - 1+ 1)) + 1
}

function my_rdms(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


function lanzar_dado(){
    dado = Math.floor(Math.random() * (6 -1  + 1) + 1)
    // console.log(`El resultado es ${dado}`)
    return dado
}


const r_arr = []
for (let i = 0; i < 100; i++) {
    r_arr[i] = my_rdms(1,100);
}

function random_letra1(){
    letras ="abcdefghijklmnopqrstuvwxyz"
    index = Math.floor(Math.random() * (letras.length) + 1)
    return letras[index]

}

function random_letra2(my_string){
    
    index = Math.floor(Math.random() * (my_string.length) + 1)
    if (my_string[index] == ' ') {
        return console.log(`El carácter en la posición ${my_string[index]} es un espacio`)
    } else {return letras[index]}

}



console.log(rdm_0_9());
console.log("***********")
console.log(rdm_1_10());
console.log("***********")
console.log(lanzar_dado())
console.log("***********")
console.log(r_arr);
console.log("***********")
console.log(random_letra1())
console.log("***********")
console.log(random_letra2("Hello World, Bye"))








