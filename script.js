console.log(`---------------------EJERCICIO 1---------------------`)
// 1. Escriba un programa que pida al usuario ingresar la longitud de la línea y muestre de uno en uno lo siguiente:
//  longitud: 5
//  +++++

let laFuncion1 = (n) => {
    console.log(`longitud: ${n}`);
    let resultado = ""
    for(let i = 0; i < n; i++){
      resultado += "+"
    }
  return console.log(resultado)
}
laFuncion1(5)

console.log(`---------------------EJERCICIO 2---------------------`)
//2. Escriba un programa que pida al usuario ingresar la longitud de la línea y dos caracteres; y muestre de uno en uno lo siguiente:
//  longitud: 5
//  caracter1: -
//  caracter2: +
//  -+-+-

let laFuncion2 = (n, a, b) => {
  console.log(`longitud: ${n}`)
  console.log(`caracter1: ${a}`)
  console.log(`caracter2: ${b}`)
  let respuesta2 = ""
  while(respuesta2.length < n){
    respuesta2 += a + b
  }
  return console.log(respuesta2.slice(0, n))
}

laFuncion2(5, "-", "+")

console.log(`---------------------EJERCICIO 3---------------------`)

// 3 Escriba un programa que pida al usuario ingresar la altura y el ancho de un rectángulo y lo dibuje utilizando asteriscos:
//  Altura: 3
// //  Ancho: 5
//  *****
//  *****
//  *****


let funcion3 = (altura, anchura) =>{
  let elAncho = "*"
  for(let i = 0; i < altura; i++){
  console.log(elAncho.repeat(anchura))
  }
}

funcion3(3, 5)

console.log(`---------------------EJERCICIO 4---------------------`)

// 4.Escriba un programa que dibuje el triángulo del tamaño indicado por el usuario de acuerdo al ejemplo:
//  Altura: 5
//  *
//  **
//  ***
//  ****
//  *****

let funcion4 = (altura) => {
  let asterisco = "*"
  for(let i = 0; i < altura; i++){
    console.log(asterisco)
    asterisco += "*"
  }
}

funcion4(5)




console.log(`---------------------EJERCICIO 5---------------------`)
// 5.Escriba un programa que dibuje el hexágono del tamaño indicado por el usuario de acuerdo al ejemplo:
//  Lado: 4
//     ++++
//    ++++++
//   ++++++++
//  ++++++++++
//   ++++++++
//    ++++++
//     ++++

// let funcion5 = (lado) => {
//   let simbolo = "+".repeat(lado)
//   let espacios = "".repeat(3)
//   for(let i = 0; i < 7; i++){
//     if(simbolo.length < lado + 3){
//       console.log(espacios + simbolo)
//       simbolo += "+"
//     }
//   }
// }


// funcion5(4)


console.log(`---------------------EJERCICIO 6---------------------`)

// 6. Escriba un programa que pida al usuario ingresar un usuario y una contraseña, y le indique si ha validado o no, debemos tener mínimo 5 usuarios en el Local Storage (cargados previamente por el programa, con formato a elegir por el alumno) y usarlos para saber si el usuario ha accedido o no.


// let funcion6 = (usuario, contraseña) =>{
//   localStorage.setItem('user', JSON.stringify({
//     nombre: 'persona1',
//     password: '123'
// }));
//   localStorage.setItem('user', JSON.stringify({
//     nombre: 'persona2',
//     password: '1234'
// }));
//   localStorage.setItem('user', JSON.stringify({
//     nombre: 'persona3',
//     password: '12345'
// }));
//   localStorage.setItem('user', JSON.stringify({
//     nombre: 'persona4',
//     password: '123456'
// }));
//   localStorage.setItem('user', JSON.stringify({
//     nombre: 'persona5',
//     password: '1234567'
// }));



// }

console.log(`---------------------EJERCICIO 7---------------------`)

// 7 Ten precargado en un array 10 números e indica si uno pedido al usuario existe y en qué posición está.

const numeros = [3, 1, 8, 2, 4, 23, 56, 92, 22, 10,]


let estaYdonde = (num) =>{
  let siExiste
  for(let i = 0; i < numeros.length; i++){
    if(numeros[i] == num){
      siExiste = i
    }
  }
  return siExiste >= 0 ? console.log(`${num} si existe!!! Y esta en la posicion ${siExiste}`) : console.log(`${num} NO existe, lo siento!!!`)
}

estaYdonde(22)

console.log(`---------------------EJERCICIO 8---------------------`)
      
// 8.Ten precargado en un array 20 números y ordénalo.


const numeros20 = [3, 1, 8, 2, 4, 23, 56, 92, 22, 10, 120, 495, 785, 12, 5, 11, 14, 15, 21, 33]











