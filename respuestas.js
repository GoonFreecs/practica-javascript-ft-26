/* Respuesta 1 */
console.log("Respuesta 1")
console.log("Hola, mundo!") // Hola, mundo!

/* Respuesta 2 */
let a = 10;
let b = 5;

console.log("Respuesta 2")
console.log(a + b) // 15
console.log(a - b) // 5
console.log(a * b) // 50
console.log(a / b) // 2

/* Respuesta 3 */
function sumar(a, b){
    return a + b
}
console.log("Respuesta 3")
console.log(sumar(5,7)) // 12

/* Respuesta 4 */
let open = false;

console.log("Respuesta 4")
if(open){
    console.log("Abierto")
} else {
    console.log("Cerrado")
}
/* condition ? true : false */
let respuesta = open ? "Abierto" : "Cerrado"
console.log(respuesta)

/* Respuesta 5 */
let colors = ["Red", "Blue", "Yellow", "Green"]

console.log("Respuesta 5")
for(let i in colors){
    console.log(colors[i])
}
/* Array.forEach(function(value, index, arr){
    return result
}) */

colors.forEach((item) => console.log("Color: " + item))

for(let color of colors){
    console.log(color)
}

/* Respuesta 6 */
function devuelveCuadrado(a){
    //return a**2
    return a * a
}

console.log("Respuesta 6")
console.log(devuelveCuadrado(9)) // 81

/* Respuesta 7 */
const persona = {
    nombre: 'John Doe',
    edad: undefined,
    ciudad: 'Puerto Montt'
}

console.log("Respuesta 7")
console.log(persona) // { nombre: 'John Doe', edad: undefined, ciudad: 'Puerto Montt' }
console.log(persona.nombre) // John Doe
console.log(persona["ciudad"]) // Puerto Montt

/* Respuesta 8 */
console.log("Respuesta 8")
for (let index = 1; index <= 10; index++) {
    console.log(index) // 1 2 3 4 5 6 7 8 9 10
}

/* Respuesta 9 */
function concatTwoString(a, b){
    return `${a}${b}`
}

console.log("Respuesta 9")
console.log(concatTwoString("Hola", "Mundo")) // HolaMundo

/* Respuesta 10 */

let numeros = [1, 2, 3, 4, 5]
let sumaNumeros = 0
for (const element of numeros) {
    sumaNumeros += element; 
}
console.log("Respuesta 10")
console.log(sumaNumeros)

 /* Respuesta 11 */
let num = -0

console.log("Respuesta 11")
if (num > 0){
    console.log("POSITIVO")
} else if (num < 0){
    console.log("NEGATIVO")
} else {
    console.log("CERO")
}

/* Respuesta 12 */
let nums = [1, 2, 3, 4, 5]
function sumarValores(valores){
    let total = 0
    for (const valor of valores) {
        total += valor
    }
    return total
}

console.log("Respuesta 12")
console.log(sumarValores(nums))

/* Respuesta 13 */

console.log("Respuesta 13")
for (let index = 1; index <=20; index++) {
    if(index % 2 === 0){
        console.log(index)
    }
}

/* Respuesta 14 */
function stringLength(string){
    return string.length
}
console.log("Respuesta 14")
console.log(stringLength("Hola Mundo")) // 10

/* Respuesta 15 */
console.log("Respuesta 15")
for(let i = 20; i >= 1; i--){
    console.log(i)
}

/* Respuesta 16 */
let inicio = 5
let fin = 10

console.log("Respuesta 16")
for(let index = inicio + 1; index < fin; index++){
    console.log(index)
}

/* Respuesta 17 */
function reverseString(string){
    let reverseWord = ""
    for (let index = string.length - 1; index >=0; index--) {
        reverseWord += string[index]
    }
    return reverseWord
}
console.log("Respuesta 17")
console.log(reverseString("Hola")) // Hola => aloH


console.log("Respuesta 18")
for (let index = 1; index <= 15; index++) {
    if(index % 2 === 1){
        console.log(index)
    }
}


function esPalidromo(palabra){
    let palabraInvertida = ""
    for(let i = palabra.length - 1; i >= 0; i--){
        palabraInvertida += palabra[i]
    }
    return palabra.toLowerCase() === palabraInvertida.toLowerCase() ? true : false
}

console.log("Respuesta 19")
console.log(esPalidromo("Hola")) // false
console.log(esPalidromo("Oso")) // true
console.log(esPalidromo("aiofobia")) // false

/* Respuesta 20 */
console.log("Respuesta 20")
for (let index = 1; index <= 20; index++) {
    // index % (3*5) === 0
    if(index % 3 === 0 && index % 5 === 0){
        console.log("FizzBuzz")
    } else if (index % 5 === 0){
        console.log("Buzz")
    } else if (index % 3 === 0){
        console.log("Fizz")
    } else {
        console.log(index)
    }
}