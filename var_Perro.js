var Perro
console.log(Perro +" es de tipo: "+typeof Perro)

var estudiantes = 8
console.log(estudiantes+" es de tipo: "+typeof estudiantes)

var nombre = "Aquiles Meles Parto"
console.log(nombre +" es de tipo: "+typeof nombre)

var elhigoesfruta = false
console.log(elhigoesfruta+" es de tipo: "+typeof elhigoesfruta)

/* y los tipo complejo.

 Estos se dividen a su vez en 2 las funciones que veremos despues
 y tipo Objeto.

 Los tipo objeto: un valor en memoria al que podemos acceder 
 por un identificador, tenemos 2 casos particulares para estos en JS.

 - Arreglos: aquellos objetos  similares a una lista cuyo prototipo 
 proporciona métodos para efectuar operaciones de recorrido y de mutación.
 - Null: Undefined para Objetos
 
 veamos ejemplos*/

var vacio = null
console.log(typeof vacio)

var listacompras = ["huevos", 12, "camioneta", true]
console.log(listacompras+" es de tipo: "+typeof listacompras)

var datos = { nombre: "Lic. Valeriano", edad: 23, casado: false }
console.log(datos+" es de tipo: "+typeof datos)

var bañar = function bañar(perro){conole.log("voy a bañar a " + perro + " que es mi perro fav")}
console.log(bañar+" es de tipo: "+typeof bañar)