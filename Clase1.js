//Clase n°1 Feb. 16. 2021

"use strict"; // nos permite trabajar con una estructura mas formal

//modulo para poder introducir datos de manera asincrona
var prompt = require('prompt-sync')()

//muestra en consola el Mensaje "Hola mundo"
 console.log("Hola mundo")

 /*La finamilidad de este tramo de codigo es poder mostrar que 
 JavaScript (JS) es un lenguaje de Tipado dinamico i,e. las variables
 no tienen un tipo de dato establecido y pueden cambiar, ademas 
 se muestra como hacer un comentario de varias lineas.*/

 var numero = 23
 console.log(numero)
 numero = prompt('Como te llamas? ')
 console.log(numero)

//Veamos tipos de datos.

/* Los tenemos de 2 tipos

Lo primitivos: Son aquellos tipos de datos por denominarlos
basicos, no son objetos y no tienen propiedades, ademas son 
inmutables i,e. solo se pueden reasignar de manera directa

En JS tenemos 6
- Undifined : Es lit nada y solo aparece cuando definimos 
una variable y no le asignamos ningun valor.
- Numbers.
- Strings.
- Boolean. 
- Symbol: El tipo Symbol nos permite obtener valores que no 
pueden volver a ser creados, es decir, son identificadores
 únicos e inmutables.
 - Big Int Sirve para representar con mayor precision numeros
 enteros.

 Veamos algunos ejemplos */

var Perro
console.log(typeof Perro)

var estudiantes = 8
typeof estudiantes

var nombre = "Aquiles Meles Parto"
console.log(typeof nombre)

var elhigoesfruta = false
console.log(typeof elhigoesfruta)

/* y los tipo complejo.

 Estos se dividen a su vez en 2 las funciones que veremos despues
 y tipo Objeto.

 Los tipo objeto: un valor en memoria al que podemos acceder 
 por un identificador, tenemos 2 casos particulares para estos en JS.

 - Arreglos: aquellos objetos  similares a una lista cuyo prototipo 
 proporciona métodos para efectuar operaciones de recorrido y de mutación.
 - Null: Undefined para Objetos
 
 veamos ejemplos*/

var vacio = null
console.log(typeof vacio)

var listacompras = ["huevos", 12, "camioneta", true]
console.log(typeof listacompras)

var datos = { nombre: "Lic. Valeriano", edad: 23, casado: false }
console.log(typeof datos)

var bañar = function bañar(perro){conole.log("voy a bañar a " + perro + " que es mi perro fav")}
console.log(typeof bañar)
