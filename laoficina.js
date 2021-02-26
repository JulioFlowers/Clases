"use strict"

global.casa = 'Una casa';

console.log(globalThis.casa);

/*en frontend tambien es valido usar window
ya que el ambito global tambien se le conoce
como window*/

global.b = 2
console.log(globalThis.b)
global.archivero = "El archivero global"
global.puerta = 'Puerta Principal';

console.log(globalThis.puerta);

/*en frontend tambien es valido usar window
ya que el ambito global tambien se le conoce
como window*/

global.sotano = {

    archivos: "El archivero del sotano",
    estacion: "Estacion de carga"
}

console.log(global.sotano.archivos)


let oficina = {
    mesa: 'La mesa del jefe',
    engrapadora: 'La engrapadora del jefe',
    archivero: "el archivero de RH",

    archivar(a) {

        console.log(`El jefe archivo el/la ${a} en el ${this.archivero} `)

    }

}

oficina.archivar("Reporte de ventas")