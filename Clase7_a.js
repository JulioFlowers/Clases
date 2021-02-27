// 24 feb 21
"use strict"

/* Esta es la primera parte de una serie de 3 archivos que corresponden 
a la leccion 7, en la cual hablaremos a mediana profundidad de la palabra 
reservada "this" (para variables y funciones), el cual veremos en 2 espacios 
de desarrollo Frontend(JS puro) y Backend (el entorno de ejecucion de Node) de
tal manera que se puedan apreciar sus diferencias.

Ademas veremos primero para calentar el objeto "arguments" el cual guarda en un 
objeto de propiedades numerables todos los parametros de una funcion, este objeto
es muy util para muchas cosas y el uso es al gusto del programador.

Aqui vemos un ejemplo que nos ayuda a que nuestra funcion no sea saturada con mas 
parametros de los solicitados.*/


function listadecompras(a1, a2, a3){

    console.log(arguments[0]) //imprime la primer propiedad de arguments (a1)

    /* Aunque aqui se puede apreciar que la forma de imprimir los elementos del
    objeto arguments es igual al de impresion de los arrays, el objeto arguments
    no comparte metodos con los arrays, salvo por length.*/

    if( arguments.length >3 )

    /* Esta instrucion le dice que si la cantidad de elementos que hay en el objeto
    elements es mayor a 3 (la cantidad de parametros estipulada por el programador)
    entonces, que no corra el codigo principal de esta funcion y que al contario 
    muestre este mensaje */

        console.log("Alto alli forajido")

    else
        console.log(`Te hace falta comprar \n ${a1}, \n ${a2}, \n ${a3}`)

}

/* Notaron algo nuevo en el console.log de esa funcion? eso se llama plantillas literales, 
son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible
 utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de 
 cadenas de caracteres.

En ediciones anteriores de la especificación ES2015, solían llamarse "plantillas de cadenas 
de caracteres". 

con las plantillas literales, se pueden utilizar sus nuevas capacidades (es decir, insertar 
expresiones con ${ } e incluir caracteres de fin de linea literales dentro de la cadena) 
para simplificar la sintaxis, como la que vieron arriba.*/


listadecompras("Aceite", "Refresco", "Papas") //pongale otro parametro



/* Ahora veamos el manejo de la palabra clave this en Node JS.

En este caso con respecto al JS puro del frontend, this en el espacio global de ejecucion 
de node js, llamado el modulo declara un tipo de dato undefined, para manejar las propiedades 
de this del JS puro, en node JS se usa la palabra reservada global veamos como se escribe 
reciclando el codigo de frontend de laoficina_b.js */

/* Recontextualicemos, a Iker lo contratan en una compañia que esta en Paseo de la Reforma 27 
casi esquina Ricardo Flores Magon, en esta (this) empresa llamada Node JS interactive, tienen 
una regla en particular y es la siguiente cuando se refieren a toda la empresa como espacio 
en decir la puerta de esta(this) empresa, dicen la puerta global. Entonces a Iker lo contratan 
para remodelar la empresa por lo que empieza poniendo una puerta principal*/

global.puerta = 'Una puerta de cristal rotativa';

console.log(globalThis.puerta);

/*en frontend es valido usar window ya que el ambito global tambien se le conoce
como window, aqui por su parte el ambito global es lit Global y el metodo para 
llamar al objeto este es globalThis (tambien es valido en JS puro de frontend).*/

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