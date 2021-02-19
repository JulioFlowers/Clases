 // Clase 4 asincrona 19 fab 2021

 "use strict"

const Prompt = require('prompt-sync')()

 
 /*
     !false = True 
     !true = False   
  */

  function clima2(temp, humd){
    var soleado = (temp === "l" || humd==="h"? "esta lloviendo" : "no esta lloviendo" )
    console.log(soleado)
}

console.log("describe las variables climatologicas")
console.log("escribe h si la temp esta High y l si la presion esta Low")
var Temp= Prompt("")
var Humd= Prompt("")

clima2(Temp, Humd)

//Hay que tener cuidado al enviar datos no booleanos a los operadores logicos

var animales = "gatos" && "perros" // suelta gatos

console.log(animales)

//cualquier cosa no booleana en el operador ! sera false
var helado = !"vainilla";
console.log(helado)

/* consecuencias de la logica
false && anything : False
true  || anything: True*/

//Operadores de concatenacion + y +=

var helado2 = "Napolitano "

console.log("Me gusta el helado de vainilla pero tambien el " + helado2)

/* +=  a = "string" b="string" a+=b a = a+b*/

var b = "y el vainilla"

console.log("Me gusta el helado de ", helado2+=b)

/*Operador Unario.
Se aplica normalmente a objetos y son solo de un operando

delete borra una propiedad del objeto

delete object.property
delete object.[propertyKey]
delete objectName[index]
delete property (solo en declaracion with) */

console.log('')
var licvaleriano = {nombre:"Lic. Valeriano", edad: 113, casado:false, trabaja:"Luis Vuitton" }

console.log(licvaleriano)
licvaleriano.trabaja = "" // este metodo solo cambia el valor de la propiedad trabaja
console.log(licvaleriano)
delete licvaleriano.trabaja // este borra la propiedad trabaja con todo y su valor
console.log(licvaleriano)

var listadecompra = ["pan", "queso", "fresas", "agua"]
console.log(listadecompra)
delete listadecompra[0] 
/*esto es una mala practica pues solo borra el contenido 
del espacio con identificador 0 y no el elemento con identificador
0, en el futuro veremos el metodo correcto.*/
console.log(listadecompra)

var y = "Me gusta programar en JS"
console.log(y)
//delete y 
console.log(y)
// No se puede borrar datos de tipo primitivo con el operador Delete 

/* typeof: nos devuelve el tipo de dato de nuestra varible
aplicable en todo tipo de datos

Ejemplos checar var_Perro.js*/

/*operador void
lo unico que hace es que el contenido que tenga a su derecha
sea leido como undefined
*/