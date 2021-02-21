"use strict"

const Prompt = require('prompt-sync')()

/*
if: 

if (condición) un linea de accion
else if (condición) otra linea de accion
else la linea final de accion 

if(condicion){
    accion uno
    accion 2
    accion 3
}
else if(condicion){
    accion uno
    accion 2
    accion 3
}
else{
    accion uno
    accion 2
    accion 3
}

var condicion = (condicion)? statement 1: (condicion ? else if: else) 
Esta es una forma de escribir una secuencia else if con el operador if terniario
de esta forma le decimos al operador terniario si statement 1 else (reevalua una 
secuencia if) si condicion 2, statement 2, que contaria como else if, y si no pasa
else statement 3.

veamos un ejemplo de esta ultima forma de construir if's y tambien usando
el componente else if la secuencia de codigo if statement, else estatement ya 
la hemos visto en ejemplos clases pasadas

*/

var s = Prompt("Dime v, c, o f y te dire un sabor: ")
var sabor = (s==="v")? "es vainilla": ((s==="c")? "es chocolate": "es fresa")
console.log(sabor)


/* Switch: esta declaracion evalua una expresion comparando su valor
con diferentes instancias llamadas casos (case) y ejecuta tales intancias
llamadas, además tiene una palabra reservada llamada default la cual nos
proporciona el caso en el cual no se cumple ninguna instancia*/

var d = Prompt("De que sabor quieres tu pay: ")

switch(d){

    case "Queso":
    console.log("Son 15.75$")
    break

    case "Chocolate":
    console.log("Son 13.55$")
    break

    /*No es necesario llamar al caso default hasta el final 
    se puede hacer desde cualquier parte de la estructura Switch */
    default:
        console.log("No vendemos de ese sabor, lo sentimos.") 
        break

    case "Napolitano":
        console.log("Son 16.27$")
        break
}

/*este ejemplo nos muestra que pasa nis comemos el codigo break 
despues de cada caso (case)*/

var a = Prompt("Que animal quieres salvar: ")

switch(a){

    case "Jirafa": //asi podemos correr el mismo caso si hay mas formas de llamarlo (como aqui con J y j)
    case "jirafa":
         console.log("la Jirafa esta en el arca de Noe")

    case "Puerquito":
        console.log("el puerquito esta en el arca de Noe")

    case "Tortuga":
        console.log("La tortuga esta en el arca de Noe")
    break
    
    default: 
    console.log("Los " + a+"s" + " no estan en el arca de Noe")
}

/* Reto: 
 Ustedes son unos famosisimos climatologos y les dicen que hagan una 
 programa que les diga que tipo de clima va a ser segun su experiencia
 ustedes saben que 
 
 Soleado si Temp es Alta y La presion Atmosferica: Es baja
 Saben que esta lloviendo solamente si la Presion Atmosferica es alta
 Si la temperatura es baja y la presion atmosferica es baja esta nevando
 si la temperatura es baja y la presion es baja no hay forma de que 
 existan precipitaciones
 
 Pero ademas detectar si se introdujo un tipo no valido de temperatura o
 presion*/

 