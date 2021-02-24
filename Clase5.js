// Clase 22 feb 2021

"use strict"
const Prompt = require('prompt-sync')();

/*

var clase  = 3

function ejemplo(){

}

if(condicion){ //SCOPE DE IF
    var variable= "variable"
}
else{ //SCOPE DE ELSE
}

console.log(variable)

while(condicion){sentencia}

for(algo; algo; algo){sentencia}

*/

/* En JS no nada mas tenemos 1 forma de declarar, en particular tenemos 3

Var: declara una variable completamente libre ("use strict") normalmente 
se utiliza para declarar variables globales

let: Let declara tanto variables globales como variables locales sin nece-
sidad de cambiar nombres y no reasigna valores a los mismo, ademas no podemos
reasignar valores por la escritura de let*/

let mivar = 8
    mivar= 10
 
console.log(mivar)

let i;

for(i = 0; i < 21; i++){
    console.log(i)
    
}
// i ya 21

console.log("")
console.log("este i esta fuera: ", i)

function añosiker(a){

    console.log("Iker tiene "+a+" años.")
    console.log("en 10 años Iker tendra: ", 10+a)
}

añosiker(i)
console.log(i)

const listadecompras = ["Huevo", "Jamon", "Pan"] 
delete listadecompras[0] //esto si es posible
console.log(listadecompras)

//reasignar no es posible
//listadecompras= ["Baterias", "aceite", "chocolate"]

/* ciclos While 

while (condicion){
    sentencia
}

   - do while

do
{
    sentencia(s)
} while (condicion);

ciclo For
- for ... in 
-for ... of
(por el momento no se veran en esta leccion) */

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

let d = 1;


/*Este si se espera a leer todo el codigo antes de reevaluar la condicion*/
do{
    console.log("Bienvenidos al sumatron automatizado 2.0")
    console.log("Ingrese 2 numeros a realizar operaciones basicas")
    let a1 = Number(Prompt(" 1er n°: ")) 
    let a2 = Number(Prompt(" 2do n°: "))

    opbasicas(a1, a2)
    console.log("")

    console.log("Quieres seguir sumando (1)Si, (0)No: ")
    d=Number(Prompt())

    console.log("usted eligio el no: ", d)


    while(d !== 1 && d !== 0){
        console.log("EL dato introducido es icorrecto.")
        console.log("Quieres seguir sumando (1)Si, (0)No: ")
        d = Number(Prompt())

        console.log("usted eligio el no: ", d)
    }

    if(d===0)
        console.log("Hasta luego")

    console.log("")
    console.log("")

}while(d===1)

/* este lo hace instantaneo los cambios y por eso usamos una variable auxiliar 
de asignacion*/
while(d===1){

    console.log("Bienvenidos al sumatron automatizado 2.0")
    console.log("Ingrese 2 numeros a realizar operaciones basicas")
    let a1 = Number(Prompt(" 1er n°: ")) 
    let a2 = Number(Prompt(" 2do n°: "))

    opbasicas(a1, a2)
    console.log("")

    console.log("Quieres seguir sumando (1)Si, (0)No: ")
    let ev=Number(Prompt())

    if(ev===0){
        console.log("Hasta luego")
        d=ev
    }

    else if(ev===1){
        d=ev
    }
    else{
        console.log("EL dato introducido es icorrecto.")
        console.log("Quieres seguir sumando (1)Si, (0)No: ")
        ev=Number(Prompt())
    }
    
    console.log("")
    console.log("")

}

/*crea un bucle que consiste en 3 expresiones (opcionales) encerrada
en parentesis y separadas por puntos y comas seguidas de una sentencia ejecutada en bucle

sintaxis: for ([expr. incial]; [expr. intermedia]; [expr. final]){
    sentencia(s)
}

eg.*/

/*
for (let j=0; j < 30; j++){
    
    opbasicas(j, 5)
    console.log("")
    console.log("")
}
*/

//imprime la funcion opbasicas del 1 al 30 con el 5 como segundo operando

//se pueden anidar los fors tambien

for (let j=0; j < 5; j++){

    for(let k=0; k<5; k++){
        opbasicas(j, k)
        console.log("")
        console.log("")

    }        
}

//imprime la funcion opbasicas del 1 al 5 con un operador secundario que va del 1 al 5 con un for tambien 
