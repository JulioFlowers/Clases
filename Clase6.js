
//feb 23 2021

"use stict"

const Prompt = require('prompt-sync')();

/* FUNCIONES.

Son frgamentos de codigo reutilizable
que uno o varios argumentos y declaraciones 
para realizar una tarea especifica.

tenemos 2 palabras reservadas 

function: nos ayuda a construir la funcion
Return: retorna el valor de la funcion.

=>: Arrow function (EC6) Nos ayuda a construir
funciones.

tenemos 2 tipos de funciones 

Funciones sencillas: Sin parametros
Funciones parametrizadas: Aquellas con parametros

e.g */

//sencilla
function hola(){
    console.log("Hola Clase");

}

hola()
console.log("")

//parametrizada
function holan(n){
    console.log("Hola ", n);

}

holan("Eduardo")
console.log("")

/*Return permite guardar valores de funciones pasa pasarlos a metodos,
tambien permite guardar acciones a aplicar.*/


// En este caso retorna un string.
function saludo (n){

    if(n!=="Eduardo")
    return "Hola " + n

    else
    return "No nos gustan los Eduardos."

}

// En este caso retorna la construccion de una array.
function saludoArray (n){

    if(n!=="Eduardo")
    return Saludo = ["hola", n]
    

    else
    return listadenombresnogustada = ["no nos gusta", "el nombre de", n]

}

let N = Prompt("¿Cual es tu nombre amiguito del bosque?: ")

console.log(saludo(N))

/* Recordemos que funcion es un tipo de dato objeto por lo 
cual pasar una funcion a una variable, aeste tipo de funciones
 que pasamos por una variable las llamos funciones anonimas eg.*/


let leche = function(s){

    if (s<=250)
        console.log("Ya casi no hay leche")
    else
        console.log("aun hay leche")

}

let agua = function(){
     console.log("No olviden tomar agua")
}

// y se llaman exactamente igual como llamamos a las funciones normies
leche(500)

let Donas = 8

function donas(s){
    //tantas donas 
    console.log("Hay " + s + " donas." )
}

donas(Donas)

/* Hay que recordar (de nuevo) que una funcion puede ser tipo de dato de 
una variable por lo tanto hay que tener cuidado en como llamamos nuestras
variables y nuestras funciones, prueba cambiando el nombre de la funcion
donas a Donas y ve que sucede. */

/*Ahora una consecuencia de las funciones anonimas son las llamadas funciones
arrow (ECMAscript 6, 2016) las cuales usan el operardor "=>" para declararlas
 y por consenso, se declaran en una constante eg. */

 //cuando son sencillas tenemos que llamar al nombre de la constante antes del =>
const status = status => console.log("todo esta bien");

//cuando son parametrizadas basta solo poner los parametros.
const statusq = (s) => {

    if(s === 200){
        console.log("todo esta bien")
    }

    else{
        console.log("Tienes un error tipo 404")
    }
    

}

/*este tipo de funciones cumple un tipo de propiedad que  veremos 
mas a detalle cuando lleguemos a la parte de this.*/

//e igual las llamamos como cualquier funcion normie
statusq(1)

/*La sintaxis SPREAD y el operador REST.

"La sintaxis extendida o spread syntax permite a un elemento iterable 
tal como un arreglo o cadena ser expandido en lugares donde cero o más 
argumentos (para llamadas de  función) o elementos (para Array literales) 
son esperados, o a un objeto ser expandido en lugares donde cero o más pares
de valores clave (para literales Tipo Objeto) son esperados" - MDN.

Por el momento no nos vamos a engorronar con esa definicion toda extensa
lo iremos tratando poco a poco y lo primero que veremos es la sintaxis 
extendidas para las funciones, las cuales pasan datos de un objeto iterable 
a los parametros de una funcion, esto lo hace a partir del operador rest */

/*En el pasado si queriamos pasar los elementos de un array a una funcion
se tenia que usar el metodo apply con la sentencia que aparece a continuacion.*/

let Numeros = [0, 1, 2, 3]

function numeros(w, x, y, z){
    return w + x + y + z 
}

console.log(numeros.apply(null, Numeros ))
//muestra la suma de todos los elementos del array numeros


/*  pero ahora con el "..." operador rest que hace 
exactamente lo mismo que el pasado metodo apply tenemos que...*/

console.log(numeros(...Numeros))
/* muestra la suma de todos los elementos del array numeros,
pero ahora con una sintaxis un poco mas simple.

Pero! la pregunta del millon es, ¿si ya teniamos apply para que 
usar el operador rest? pues por como esta ideado el metodo apply
este no puede ser usado en las funciones constructoras, aquellas 
que nos permiten crear objetos; lo que llevaba a construir funciones
para aplicar el metodo de manera indirecta, ahora es tan facil 
como usar el operador REST, eg. */

let Datearray = [2000, 2, 5 ]

//vean super easy peasy lemon squeezy 
let date = new Date(...Datearray) 
// new: palabra clave para llamar a las funciones constructoras
//Date construye un objeto con la fecha 

console.log(date)

//finalmente podemos anidar funciones dentro de funciones eg.

function data(a1, a2, a3){

    if(a1==="" || a2==="" || a3==="")
    console.log("A sos retrol.jpg")

    else{

        console.log("Hola me llamo: " + a1 +"\n"
      + " naci en: " + a2 + "\n" + "tengo: " 
      + a3 + "años.")

    }
      
}

console.log("Bienvenido al Presentamatico")
console.log("Introduce tus datos para poderte presentar \n con otros compis")

let a1 = Prompt("Nombre(s): ") 
let a2 = Prompt("Lugar de origen: ") 
let a3 = Prompt("edad: ") 

data(a1, a2, a3)

function anidacion(e){

    function registro(n, d, r){
        let register = Math.random()*600000
        console.log("Su registro es : " + Math.round(register) + "\n"
        + "Su nombre es: " + n + "\n" + "Residiendo en: " + d + "\n"
        + "Tipo sanguineo: " + r +".")
        
    }

    if(e <= 18){
        console.log("No puedes alquilar un auto")
    }

    else{

    
        console.log("BIENVENIDO A ALQUILAMAT 300")
        console.log("alquila tu auto ya")
            let n = Prompt("Nombre: ") 
            let d = Prompt("Domicilio: ")
            let r = Prompt("Tipo de Sangre :")

        console.log("")
        registro(n, d, r)

    }

}

let e = Prompt("Que edad tienes: ")

anidacion(e)

