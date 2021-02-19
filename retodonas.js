"use strict"

/* Asignacion: Usando la funcion donas de la clase 2 cree un programa, que le regrese 
lo mismo de que la funcion Donas, pero que el valor de la variable donas nunca se altere

hint: use los asignadores de la clase de hoy.

90% del codigo a continuacion es de su compañera Daniela Nicolas Lopez
*/

console.log("..........PROGRAMA DONAS MASTER .............")

var donas = 8;

function Donas(cantidad){
    //var donas = 8;
    console.log("Hoy decidí dejar las donas, sólo me comí ", donas - cantidad)
    console.log("Hoy recaí y me comí  ", donas * cantidad)
    console.log("Densidad de donas que me comí hoy ", donas / cantidad)
    console.log("El residuo de la densidad de donas que me comí", donas % cantidad)
    console.log("Como resprobé me comí  ", donas * cantidad, " donas, junto con mis problemas")
    console.log("¿Las donas de ayer son las mismas de hoy? ", donas === cantidad)
    console.log("Originalmente tenia: "+donas+" donas.")

    //codigo extra a la asignacion que le puso para verse cools
    var medidaGordura = (cantidad > "5")? "Pinche gordo" : "Que fit uwu"
    console.log (medidaGordura)
}

/* Esto tambien fue fuera de la asignacion se lo puse yo 
y sirve para agregar una cantidad variable de donas*/
var c=Number(Prompt("Cuantas donas piensas comer: "))
Donas(c)