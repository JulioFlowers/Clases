// Clase 22 feb 2021

"use strict"
const Prompt = require('prompt-sync')();

//ignoren este codigo, solo nos es util para no escribir tanto en la sentencia while

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

/* En JS no nada mas tenemos 1 forma de declarar, en particular tenemos 3

Var: declara una variable completamente libre ( si no se usa "use strict") 
normalmente se utiliza para declarar variables globales, y puede ser redefi-
nida mediante el uso de la palabra reservada var o solo llamandola.

let: Let declara tanto variables globales como variables locales sin nece-
sidad de cambiar nombres y para redefinir el valor de la variable, no es 
valido el uso de la palabra reservada let, solo basta con llamar a la 
variable.

y finalmente...

Const: Const declara constantes que no pueden ser reasignadas (aunque)
en los objetos sus identificadores y/o propiedades si pueden ser 
modificadas(aunque no pueden ser reasignados con otros objetos), además
el tipo de dato undefined en const no es admitido. eg.

*/

let mivar = 8
    mivar= 10 //aqui reasignamos mivar a 10 
 
console.log(mivar)

//veamos que pasa en estos 2 casos

let i = 10 // este es una variable global

console.log("este es el i antes del ciclo for ", i)

//ahora pasemosla por un for  que hace i cero y que suma sobre i 

for(i = 0; i < 21; i++){

    console.log(i)
    
}

console.log("")
console.log("este i esta fuera del for: ", i)

//ahora declaremos lo siguiente 

let j = 34; //hagamos algo similar a lo de ahorita pero...

for(let j = 0; i < 21; i++){ // <---- ojo

    console.log(i)
    
}

console.log("")
console.log("esta j esta fuera del for: ", j)

/* Se daran cuenta que si lo corren; primero, no les dara
un error y segundo, les mostrara 2 valores diferentes para
j  esto es porque la primera j es una variable global, y la 
segunda declaracion de j es local (se explicara un poco mas 
adelante) por lo cual podemos hacer 2 declaraciones sin 
problema y referirnos a demas d 2 variables diferentes cosas
que no pasa con var.*/

//relacionado a las constantes tenemos lo siguiente

const listadecompras = ["Huevo", "Jamon", "Pan"] 
delete listadecompras[0] //esto si es posible 
//aunque recordemos delete en arrays es mala practica

console.log(listadecompras)

/*reasignar no es posible, quieten el comentario de abajo
y observen la magia.*/

//listadecompras= ["Baterias", "aceite", "chocolate"]



/* SCOPE de variables.

En la clase de hoy discutiremos sobre el ambito(SCOPE)
de las variables en JS, el scope determina la visibilidad,
y/o accesibilidad de las funciones.

en JS tenemos 2 tipos 

el ambito global: es el ambitos de las variables las cuales
no han sido declaradas dentro de una funcion.

el ambito local: es el ambito de todas aquellas variables que 
se destipularon dentro o en la declaracion (parametros) de una
funcion, recordemos que las sentencias if, los ciclos while, 
do while, for, y los metodos tambien son funciones. Veamos 
unos ejemplos eg. */

// este SCOPE es global

function saludo(a){
    let edad= Prompt("Cuantos años tienes?: ")
    // tanto "a" como "edad" pertenecen al SCOPE local

    console.log("Hola soy " + a + " y tengo " + edad + " años.")

}

// este SCOPE es global

/* Una de las reglas que nos ayuda a recordar como funciona un scope
(con respecto a nuestras variables) es la siguiente, las variables que 
esten fuera de mi bloque las puedo llamar, pero si estoy fuera de ese 
bloque, no puedo llamar a las variables dentro de ese bloque, veamos un
ejemplo, reciclando codigo jsjsjs */

let k 

for(k = 0; k < 21; k++)


function añosiker(a){

    console.log("Iker tiene "+a+" años.")
    console.log("en 10 años Iker tendra: ", 10+a) 
    // recuerden esto no modifica la variable.

}

añosiker(k)

//ahora para entender el ejemplo en k= 0 del for pongan let k=0

//finalmente notese que podemos anidar scopes y la regla se sigue cumpliendo, eg.

var clase  = 3

/* scope: global. Aqui se puede acceder a la variable clase, pero no a las variables
t, stat(del if) y stat(del else) ni n*/

function alumnos(n){

/* scope: local. Aqui se puede acceder a las variables n, clase, t, pero no a las variables
 stat(del if) y stat(del else) */

    let t = typeof n

    if(t==="string"){
        /* scope: local. Aqui se puede acceder a las variables n, clase, t, stat (del if) pero
        no a la variable stat(del else) */
        let stat = "esta funcion necesita un numero"
        console.log (stat)
    }

    else{
        /* scope: local. Aqui se puede acceder a las variables n, clase, t, stat (del else) 
        pero no a la variable stat(del if) */
        let stat = "hay " + n + " alumnos en la clase"
        console.log (stat)
    }


}


/* ciclos While 

while (condicion){
    sentencia
}

   - do while

do
{
    sentencia(s)
} while (condicion);

/* While hace instantaneo los cambios y por eso usamos una variable auxiliar 
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

/*mientras do ... while si se espera a leer todo el codigo antes de reevaluar la condicion*/
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


/* ciclo For
- for ... in 
-for ... of
(por el momento no se veran en esta leccion) */

/*crea un bucle que consiste en 3 expresiones (opcionales) encerrada
en parentesis y separadas por puntos y comas seguidas de una sentencia ejecutada en bucle

sintaxis: for ([expr. incial]; [expr. intermedia]; [expr. final]){
    sentencia(s)
}

eg.*/


//imprime la funcion opbasicas del 1 al 30 con el 5 como segundo operando
for (let l=0; l < 30; l++){
    
    opbasicas(l, 5)
    console.log("")
    console.log("")
}

//se pueden anidar los for's tambien

for (let m=0; m < 5; m++){

    for(let n=0; n<5; n++){
        opbasicas(m, n)
        console.log("")
        console.log("")

    }        
}

//imprime la funcion opbasicas del 1 al 5 con un operador secundario que va del 1 al 5 con un for tambien

/*nota: a partir de este momento para declarar variables se usara la palabra
 reservada "let" a lo largo del curso.*/