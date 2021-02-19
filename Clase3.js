// Clase 3 18 fab 2021

"use strict"

const Prompt = require('prompt-sync')()

/*El dia de hoy veremos los operadores aritmeticos, estos operadores 
nos permiten el hecho de manipular las variables con las operaciones 
basicas de la aritmetica, tenemos estos que son super poulares:  */

/* (+) suma 
   (-) resta
   (*) multiplicacion
   (/) division
   (%) residuo
   "(" ")" agrupacion 
   aqui un ejemplo */

function opbasicas (a,b) {

    console.log("La suma de las entradas es: ", a+b)
    console.log("La resta de las entradas es: ", a-b)
    console.log("El producto de las entradas es: ", a*b)
    var perrito = (b===0)? "No se pude dividir entre 0": "La division es: " + a/b ; 
    /* var x =  (condicion)? statement : else statement  es la sintaxis del operador 
    if ternario (? : )*/

    console.log(perrito)
/*
  El operador if terciario es equivalente a:
    if (a===0){
        console.log("No se pude dividir entre 0")
    }
    else{
        console.log("La division es: ", a/b)
    }
*/
console.log("La el residuo de la division  de las entradas es: ", a%b)
}

console.log("Bienvenido al sumatron de Daniela, \n el programa que hace operaciones de todo tipo")
console.log("Dame 2 numeros: ")

var n1 = Number(Prompt("n° 1: ")) 
var n2 = Number(Prompt("n° 2: ")) 

opbasicas(n1,n2)

/*
 y tambien tenemos estos 

++: incremento
--: decremento
estos ultimos haran algo dependiento de si los colocamos antes o despues de la variable

-: Negacion Unaria
+ Positivo Unario : este convierte a numero de ser posble un tipo de dato(como los boolean)
y lo suma a la variable anterior.

** operador exp equivalente a pow(a1,a2)
veamos otro ejemplo
 */

function otrosops (a){
 console.log("Veamos que pasa con ++a: ", ++a) // hace a+1 e imprime a+1
 console.log("Veamos que pasa con ++a: ", --a) // toma (a+1) le resta 1 e imprime a
 console.log("Esto es el inverso add. de a: ", -a)
 console.log("le sumare a a, un true: ", a+true)
 console.log("esto es  a^a: ", a**a)

}

function otrosop2(a){
  console.log("Veamos que pasa con a++: ", a++) // imprime a y le suma 1 a "a"
 console.log("Veamos que pasa con a--: ", a--) // imprime (a+1) y le resta 1 a (a+1)
 console.log(a)
}

otrosops(74)
console.log("\n")
otrosop2(8)

/* A su vez tenemos los comparadores logicos que retonan booleanos aunque tambien pueden 
retornar valores no booleanos dependiendo de la comparacion que se le haga

  (&&) AND logico: aquello y esto
  (||) OR logico: esto o aquello
  (!) Not logico: no esto 
  
  aqui un ejemplo sencillo */

  function clima(temp, humd){
      var soleado = (temp === "h" && humd==="l"? "hoy esta soleado" : "no esta soleado" )
      console.log(soleado)
  }
 
  console.log("describe las variables climatologicas")
  console.log("escribe h si la temp esta High y l si la presion esta Low")
  var Temp= Prompt("")
  var Humd= Prompt("")
  
  clima(Temp, Humd)

