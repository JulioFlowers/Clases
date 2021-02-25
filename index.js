
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

*/

/*
Funciones sencillas: Sin parametros
Funciones parametrizadas: Aquellas con parametros

e.g */
/*
function hola(){
    console.log("Hola Clase");

}

hola()
console.log("")

function holan(n){
    console.log("Hola ", n);

}

holan("Eduardo")
console.log("")


function saludo (n){

    if(n!=="Eduardo")
    return "Hola " + n

    else
    return "No nos gustan los Eduardos."

}

function saludoArray (n){

    if(n!=="Eduardo")
    return saludo = ["hola", n]
    

    else
    return 
    listadenombresnogustada = ["no nos gusta", "el nombre de", n]

}

//Return permite guardar valores de funciones o aplicar metodos

let N = Prompt("¿Cual es tu nombre amiguito del bosque?: ")

console.log(saludo(N))

/* Recordemos que funcion es un tipo de 
dato objeto por lo cual pasar a una variable a
este tipo de funciones que pasamos por una 
variable las llamos funciones anonimas eg.*/
/*
let leche = function(s){

    if (s<=250)
        console.log("Ya casi no hay leche")
    else
        console.log("aun hay leche")

}

let agua = function(){
     console.log("No olviden tomar agua")
}

leche(500)


let Donas = 8

function donas(s){
    //tantas donas 
    console.log("Hay " + s + " donas." )
}

donas(Donas)

const status = status => console.log("todo esta bien");

const statusq = (s) => {

    if(s === 200){
        console.log("todo esta bien")
    }

    else{
        console.log("Tienes un error tipo 404")
    }
    

}

statusq(1)

*/

let Numeros = [0, 1, 2, 3]

function numeros(w, x, y, z){
    return w + x + y + z 
}

console.log(numeros.apply(null, Numeros ))

/*... operador rest
hace exactamente lo mismo que el pasado 
metodo apply eg*/

console.log(numeros(...Numeros))

let Datearray = [2000, 2, 5 ]

let date = new Date(...Datearray)

console.log(date)

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