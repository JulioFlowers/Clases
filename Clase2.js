//Clase n°2 Feb. 17. 2021
"use strict"

const Prompt = require('prompt-sync')()

// Recordemos esto es un comentario de una sola linea

/* Y este de un parrafo. En los años 1600's cuando 
el tirano mando las calles de cartagena aquella 
linea comentoooo (suena conga haciendo tan tan tan)*/


/*Recapitulemos algunas cosas que vimos la clase pasada y 
exploquemos que sucedio. Retomemos la siguiente funcion*/

/* Recordemos que el Papá de pedrito no recuerda cuantos 
años tiene pedrito, pero como el papa recuerda que en 2004 
Pedrito tenia 8 y es programador ha hecho la sig. funcion. */

var edad = 8;

function añitosdepedro(){      
    edad= Prompt("Cuantos años han pasado desde el 2004? ")
    console.log("Pedrito ahora tiene: ", edad+=años) // += : edad = edad + años
}

añitosdepedro()
console.log("Pedrito tiene: " + edad)

/* Supongamos han pasado 17 años desde el 2004 que pasa cuando
corres esta funcion a poco pedrito tiene 817 años?, no! lo que 
ha pasado es que JS espera 2 tipos de datos al recibir entradas 
primitivos y objetos, y en datos primitivos puedes hacer una 
cadena con numeros o booleanos, por lo tanto JS guarda predeterminadamente
el valor en una cadena y en JS tambien pasa que + sirve para
concatenar y para sumar. */

// para forzar a que la entrada sea un numero usamos la funcio Number()

function añitosdepedro(){      
    edad= Number(Prompt("Cuantos años han pasado desde el 2004? "))
    console.log("Pedrito ahora tiene: ", edad+=años)
}

añitosdepedro()
console.log("Pedrito tiene: " + edad)

//correlo y notaras la diferencia.

/*Ahora antes de pasar con los operadores de fondo demostremos la
inmutabilidad de los tipos de datos primitivos, si te podras dar 
cuenta en la funcion pasada se imprimio 2 veces la nueva edad de 
pedrito pero esto siempre pasa? La respuesta es que no, en este caso
la variable fue afectada directamente por otro dato variable, pero
que pasa si se hace con un cambio estatico, para eso tenemos 
esta funcion como ejemplo similar a la anterior pero ahora solo 
cambiaremos la modificacion que se le hace a la variable con un dato
constante. */

var numero = 5
function sumarno (num){
    return num+=2; //le pido a la funcion que guarde numero = numero + 2 como resultado
}

console.log(sumarno(numero))
console.log(numero)

// inserte cuadrito mamalon de demostrado

/*Ahora veamos sobre los operadores, lo operadores son un tipo de funciones
predesarrolladas para el lenguaje que permiten manipular el valor de las variables,
realizar operaciones matemáticas con sus valores y comparar diferentes variables.
De esta forma, los operadores permiten a los programas realizar cálculos complejos 
y tomar decisiones lógicas en función de comparaciones y otros tipos de condiciones, 
veamoslos con algunos ejemplos y ya usando lo que tenemos de objetos*/

/*Operadores de asignacion

= asignacion asignamos a "a" le denominamos "b"
+= adicion: a "a" la redefinimos como "a"+"b"
-= resta: a "a" la redefinimos como "a"-"b"
*= multiplicacion: a "a" la redefinimos como "a"*"b"
/= division:  a "a" la redefinimos como "a"/"b"
%= residuo: a "a" la redefinimos como "a" % "b" es decir nos da el residuo de la division
**= exponenciación: a "a" la redefinimos como "a"**"b"
&&= logico AND: pasa "a" y pasa "b"
||= logico OR: pasa "a" o pasa "b"

veamos un ejemplo: */

var donas = 8;

function Donas(cantidad){      
    console.log("Hoy decidi dejar las donas, solo me comi: ", donas-=cantidad) // a 8 le quito 4 quedan 4
    console.log("Hoy recai, y me comi: ", donas*=cantidad) // 4 x 4 son 16
    console.log("densiadad de donas que comi hoy: ", donas/=cantidad) // 16/4 son 4 
    console.log("el residuo de la densidad de donas es: ", donas%=cantidad) // y sobra 0
    console.log("el martes reprobe mi proyecto final con Julio, ent comi: ", donas**=cantidad) // 0 elvado a cualquier numero es 0
    console.log("¿Las donas de ayer son las mismas que me comi hoy?: ", donas&&=cantidad) // 0 es diferente de 0 por eso el estatus es 0 
}

Donas(4) // las anotaciones anteriores se aplican si la cantidad es 4 pruebe con otros numeros


 // Desestructuracion: el operador [i] saca la iesima componente del array al que se llame eg.

 var listadecompras = ["Desodorante", true, "Te", "Frambuesas"]

 var uno = listadecompras[0] //[*] --> este de aqui es el operador desestructuración.
 var dos = listadecompras[1]
 var tres = listadecompras[2]
 var cuatro = listadecompras[3]

 console.log( "Hola soy Comprio tu asistente de compras\n hoy vas a comprar: \n"
 + uno + "\n" + dos + "\n" + tres + "\n" +cuatro)
 
 console.log(listadecompras)

//Al correr ves la diferencia entre cada uno de los console.log?

/* Comparadores.

aqui solo se dieron ejemplos se entiende bien para que son, además se puede leer
una descripcion mas a detalle en el articulo.*/

var tres= 3
var Trees= "3"

//== igual
if (tres == Trees){ console.log(tres, "es igual a: ", Trees)}
else{console.log(tres, "no es igual a: ", Trees)} 
//se parecen mucho entonces se juega

//=== estrictamente igual
if (tres === Trees){ console.log(tres, "es igual a: ", Trees)}
else{console.log(tres, "no es igual a: ", Trees)} 
//te va a decir que no es igual porque uno es cadena

console.log("¿Es cierto que 3 no es igual a 3?", tres!=Trees ) //se parecen mucho entonces se juega
console.log("¿Es cierto que 3 no es igual a \"3\"?", tres!==Trees ) //te va a decir que no es igual porque uno es cadena

if (tres >= 3){ console.log(tres," es mayor o igual a 3")}
if (tres > 8){ console.log(tres," es mayor o igual a 8")}
if (tres <= 3){ console.log(tres," es menor o igual a 3")}
if (tres < 8){ console.log(tres," es menor a 8")}