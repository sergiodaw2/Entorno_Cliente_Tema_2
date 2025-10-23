1
dia = prompt("Introduzca un número del 0 - 6: ")
dias_semana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
console.log(dias_semana[dia]-1)

2
b_arr = [true, false]
valor = prompt("Introduzca un número del 0 - 9: ")
if (valor >=0 && valor <=9) {

    alert(`El resultado es ${b_arr[0]}`)
} else {
    alert(`El resultado es ${b_arr[1]}`)
}

// 3
function sumarLista(my_arr){
let sum = 0
 for (let i = 0; i < my_arr.length; i++)
    sum += my_arr[i]
 return sum
}

console.log(sumarLista([1,14,88,99]))

// 4
function my_nums(){

let arr = []
let i = 0
let even = 0
let odd = 0
let n = 1

    while (n != -1) {
        n = parseInt(prompt("introduce un número: "))

        if (isNaN(n)) {
            console.log("POr favor introduce un valor numérico")
        } else {
            if (n % 2 == 0) even++
            else odd++

            // arr[i] = n
            arr.push(n)
        }

        i++;
    }

    return `El array de entrada es ${arr} y hay ${even} pares y ${odd} impares`
}

console.log(my_nums())

// 5

function min_num(arr,x){
    min = Math.min(...arr)
    console.log(min)
    index = arr.indexOf(min)

    if (x == 'v') return min
    else return index

}

num_arr2 = [14,88,1,99]
console.log(min_num(num_arr2, 'i'))

// 6

function find_letter(x, arr){
    x = x.toLowerCase()
    for (let i = 0; i < arr.length; i++) {
        if (x === arr[i]) return `la letra "${x}" está dentro del array`
    }
    return `la letra "${x}" no está dentro del array`
}

console.log(find_letter('a', ['b','v','c','a']))

// 7
function esVocal(x) {
 let vocals = ['a','e','i','o','u']

 for (let i = 0; i < vocals.length; i++) {
    if (x.toLowerCase() === esVocal[i]) return true

 }
 return false

}

console.log(esVocal('z'))

// 8
function transform(array){
    myString = array.join("-")
    return myString
}

let arr9 = ['red','blue','black']

console.log(transform(arr9))

// 9

function quien_cuando(dia){
    let servicio = [
      ["Lunes", "María"],
      ["Martes", "Luis"],
      ["Miércoles", "Antonio"],
      ["Jueves", "Pedro"],
      ["Viernes", "Mike"],
    ];
    
   
    for (let i= 0; i < servicio.length; i++) {
        if (dia == servicio[i][0])
        console.log((`Este día se encarga ${servicio[i][1]}`)) 
            
        }
    
}

quien_cuando('Martes')




// 10

function precio(producto){
    let productos = [
      ["monitor", 200],
      ["teclado", 20],
      ["ratón", 10]
    ];
    
    for (let i= 0; i < productos.length; i++) {
        if (producto == productos[i][0])
        console.log((`Este producto cuesta ${productos[i][1]}€ `)) 
            
        }
    
}

precio('teclado')



