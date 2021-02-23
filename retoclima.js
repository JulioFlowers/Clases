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

"use strict"

 const Prompt = require('prompt-sync')()

console.log("----------- Bienvenidos al Climamatico -----------")
console.log("Este programa le ayudara a poder saber el clima\n" +
            "que se acerca apartir de una serie de variables \n"
           +"atmosfericas porfavor introduzca Temperatura y \n"+
            "presion atmosferica.")
console.log("")

console.log("Opciones\n Temperatura: (H, h)igh (L, l)ow\n"+
            "Presion Atmosferica: (H, h)igh (L, l)ow. ")

 var temp = Prompt("Cual es valor de la temperatura: ")
 var humd = Prompt("Cual es valor de la presión atmosferica: ")

var stat = temp + humd

switch(stat){

    case "HH":
    case "Hh":
    case "hH": 
    case "hh":

        console.log("Va a llover.")

    break

    case "LH":
    case "Lh":
    case "lH": 
    case "lh":

        console.log("Va a nevar.")

    break

    case "HL":
    case "Hl":
    case "hL": 
    case "hl":

        console.log("Va ser un dia soleado.")

    break

    case "LL":
    case "Ll":
    case "lL":
    case "ll":

        console.log("Va ser un dia frio y despejado.")

    default:

        if(humd!=="H"||humd!=="H")
        console.log("Ingreso una variable de presion atm. no admitida")

        else
        console.log("Ingreso una variable de temperatura no admitida")
    break
}
 