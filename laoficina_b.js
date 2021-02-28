"use strict"

// feb 26 21

/*Notas para este archivo es necesario el archivo html laoficina.html ademas de no querer
ir a previsualizar al navegador lo escrito por este codigo en el archivo html, puede usar 
la herramienta HTML preview de Thomas Haakon Townsee.*/

/* Hoy  veremos la palabra reservada "this" en el entorno Frontend.

"this" hace referencia a esto, (sea una variable en especifico o la propiedad de un objeto) 
que se encuntre en un ambiente, expliquemoslo poquito a poco, pues dependiendo de si estamos
trabajando en una variable, objeto o funcion varia el contexto, asi que lo desarrollaremos 
con un ejemplo muy simple*/

/* tenemos esta oficina en Paseo de la reforma 144 casi esquina Av. de los insurgentes 
y se llama V8 interactive, el punto es que a Ximena la contratan y le dan la siguiente 
encomienda, le dicen a Ximena que necesitan renovar la oficina, porque esta (this) oficina
esta casi vacia.*/

//aun no peles este.
this.archivero = "un archivero normie"

//entonces empieza declarando un dato primitivo, la puerta de esta(this) oficinas
this.puerta = "la puerta de la recepcion"

/*y tambien algo mas complicado el cuarto de la recepcion, (un objeto)
se refiere a la recepcion de esta(this) compañia.*/
this.estancia ={

    table:"El mostrador de la recepcion",
    sofa: "La sala de espera de la recepcion",
    archivero:"El archivero de la recepcion",

}

/* y a estos podemos llamarlos con el nombre del objeto global que en el caso
del frontend es la ventanda del navegador (window), aunque tambien lo pueden hacer
con el nombre general de JS globalThis, como lo veran en la primera parte de la funcion
main que lo que hace es imprimir sobre el html las llamadas a estos(this) elementos.*/

/* Veamos ahora que el jefe tiene una oficina propia la cual es privada (el scope
    es local.) por lo que no podremos entrar con el metodo this del global.*/

let oficinaprincipal = {

    mesa: "Escritorio del jefe de la compañia.",
    archivero: "el achivero de direccion general",
    compu: "el ordenador princial de direccion general"

}

//veamos que pasa cuando los llamamos en main (parte 2)

/*Ahora porque el cliente siempre tiene la razón Ximena decide crear un
nuevo departamento de atencion al cliente con todo y un metodo para 
guardar las quejas de los clientes llamado guardar*/

let atentclient = {

    mostr: "El mostrador de atencion a clientes",
    acts: "El dispensadpr de formas de atencion a clientes",
    archivero: "el archivero de atencion a clientes",

    guardar(arch){

        document.write(`<h4> Se archivo ${arch} en ${this.archivero}</h4>`)
        /* Hemos creado un metodo, ie una funcion que trabaja directamente con 
        objetos y/o sus propiedades, en este caso esta funcion guarda algo(arch)
        dentro del archivero de esta oficina */
    }

}

// llamemos al metodo en la parte 3.

/* Avancemos un poco en el tiempo, hasta el punto donde la compañia cambia a una 
directora que decide contratar a Hugo y el se da cuenta que, tanto la oficina del 
jefe como la oficina del atencion al cliente tienen metodos para guardar cosas 
en sus archiveros iguales por lo que decide crear un metodo global, (aqui se se 
gusta y ya duplico el archivo para su trabajo puede borrar el metodo guardar) dentro
de atentclient.*/

function Guardar(arch){

    document.write(`<h4> Se archivo ${arch} en ${this.archivero}</h4>`)
    
}

/* Si se dan cuenta hemos creado una funcion con el argumento this.archivero y la 
funcion al ser un objeto que no tiene propiedades no sabe que hacer con esta(this)
propiedad(archivero), si quitan el use strict veran que el argumento default va a ser
que busque esta propiedad en el scope fuera del bloque de codigo (en este caso el global)
por lo que imprimira "se archivo (arch) en un archivero normie".

Entonces como la usamos, pues imaginemos que Hugo en en vez de pasarle el metodo 
a cada uno de los departamentos ya existentes (objetos) y a los futuros, entrena a un 
departamento que su unico trabajo es archivar lo que le diga el departamento x en el 
archivero del departamento x, 

con ustedes el metodo call (vease parte 3), lo que hace este metodo es pasarle el objeto
x a la funcion global y que funciona como metodo para el objeto x, y cualquiera que tenga
caracteristicas iguales a la que pide la funcion. */

/* Regresando en el tiempo, la compañia le pide a Ximena construir un espacio solo para
guardar informacion vieja, a este cuarto se le llama el archivo, pero se da cuenta que en 
el archivero hay 2 tipos de guardar cosas, en cajas y en archiveros entonces decide guardar
el metodo guardar en archivero como funcion anidada del metodo guardar y llamarla desde alli.*/

let elarchivo = {

    mesa: "Escritorio de la dirrecion de conta",
    archivero: "el archivero del archivo",
    cajas: "las cajas de archivo",
    
}

function GUARDAR(arch){

    function guardarenarch(_arch){

        document.write(`<h4> Se archivo ${_arch} en ${this.archivero}</h4>`)

    }

    /* borre la funcion anterior y ponga esta: 

       const guardarenarch = (_arch) =>{

           document.write(`<h4> Se archivo ${_arch} en ${this.archivero}</h4>`)

       } 
    */
    guardarenarch(arch)

}

//quiten el primer comment de la parte 5 y vean que pasa

/* Como podran apreciar el codigo le dio error y dejo de escribir a partir de alli, esto es 
porque this en las funciones siempre va a tratar de tomar la propiedad del scope superior a 
la funcion, cuando no lo encuentre, en este caso no es valido solo usar call, veamos 3 soluciones
aqui y una que se quedara en el codigo para que usted solo la remplace

si sabemos que le estamos pasando podemos guardarlo en el scope superior

function GUARDAR(arch){

    function guardarenarch(_arch){

        calcetines = this

        document.write(`<h4> Se archivo ${_arch} en ${calcetines.archivero}</h4>`)

    }
    guardarenarch(arch)

}

es funcional pero no es tan elegante

podemos llamar 2 veces a call para que le pase el objeto  a la funcion y despues a la funcion 
anidada.

function GUARDAR(arch){

    function guardarenarch(_arch){

        document.write(`<h4> Se archivo ${_arch} en ${this.archivero}</h4>`)

    }
    guardarenarch.call(this, arch)

}

finalmente tenemos la posibilidad de juntar 2 funciones para crear una nueva 
con el metodo bind, de aqui nos traemos el this del call y la funcion anidada

function GUARDAR(arch){

    function guardarenarch(_arch){

        document.write(`<h4> Se archivo ${_arch} en ${this.archivero}</h4>`)

    }
    guardarenarch.bind(this)(arch)

}

pero que pasa si creamos una funcion objeto que pueda heredar la propiedad 
this de su scope superior que ademas es herado de haber llamado al metodo call, 
con ustedes las arrow function al rescate (el codigo comentado dentro de GUARDAR)

para ejemplificar esto voy a construir una funcion GUARDAR1 con ese codigo.
*/

function GUARDAR1(arch){


       const guardarenarch = (_arch)=>{

           document.write(`<h4> Se archivo ${_arch} en ${this.archivero}</h4>`)

       } 
    guardarenarch(arch)

}

// la llamaremos en parte 5

let crearoficina = function(nombre){
    this.mesa = `la mesa de ${nombre}`
    this.archivero = `El archivero de ${nombre}`
    this.cubiculos = `Los cubiculos de ${nombre}`
}

crearoficina.prototype.archivar= function(arch){

    document.write(`<h4> Se archivo ${arch} en 
        ${this.archivero}</h4>`)

}

const mercadotecnia = new crearoficina("Mercadotecnia")
const conta= new crearoficina("Contabilidad")
const RH = new crearoficina("RH")
const embutidos= new crearoficina("embutidos")
const refrescos = new crearoficina("refrescos")



//Esta funcion solo imprime los argumentos que le pasemos en el html
function main(){

    // ----- PARTE 1: This en el scope global -----

    document.write(`<h4>${window.puerta}</h4>`) 
    //imprime esta(this) puerta de la empresa (el objeto global window)

    document.write(`<h4>${window.estancia.sofa}</h4><br>`)
    //imprime esta(this) sofa de la recepcion de la empresa(el objeto global window)

    document.write(`<h3>ahora usando la palabra globalThis para el objeto global.</h3>`)

    document.write(`<h4>${globalThis.puerta}</h4>`) 
    //imprime esta(this) puerta de la empresa (el objeto global)

    document.write(`<h4>${globalThis.estancia.sofa}</h4><br>`)
    //imprime este(this) sofa de la recepcion de la empresa (el objeto global)


    // ----- PARTE 2: This en un ambiente local -----

    document.write(`<h3>llamando a la oficina del jefe con window.</h3>`)

    //document.write(`<h4>${window.oficinaprincipal.mesa}</h4><br>`)

    /*¿imprime? a esta(this) mesa de oficina del jefe de esta compañia (el objeto global)
    quiten el comentario para ver si realmente hace lo que dice este comentario o no, que paso 
    con el resto del documento, porque no se imprime?*/

    document.write(`<h3>llamando a la oficina del jefe con el nombre la variable.</h3>`)

    document.write(`<h4>${oficinaprincipal.mesa}</h4><br>`)

    /*Esto pasa, ya que la oficina principal esta declarada en una variable por
    lo cual el ambiente dentro de este objeto no es de tipo global, por lo que no 
    podemos acceder mediante this. */

    // ----- PARTE 3: This dentro de un objeto (this y los metodos). -----

    atentclient.guardar("quejas")
    document.write(`<br>`)
    /*se llama al metodo del objeto atentcliente para guardar quejas en el 
    archivero de atencion a clientes, hagamos un hincapie en que con this.archivero 
    se refiere a esta(this) propiedad (archivero) de este(this) objeto.*/

    // ----- PARTE 4: Call para pasar metodos de unos a objetos de otros. -----

    //nota: si borro el metodo guardar tambien borre la parte 3 de este codigo.

    document.write(`<h3> Le pasamos el objeto atencion a clientes <br> 
    y oficina principal al equipo que archiva cosas (metodo call).</h3>`)

    Guardar.call(atentclient, "quejas")
    Guardar.call(oficinaprincipal, "Reportes anuales")
    document.write(`<br>`)

    // ----- PARTE 5: this en funciones anidadas. -----

    //GUARDAR.call(atentclient, "peticiones")
    //vea arder el codigo.

    document.write(`<h3> Llamadas con la funcion arrow anidada. </h3>`)

    GUARDAR1.call(atentclient, "informes")
    GUARDAR1.call(oficinaprincipal, "dulces")
    document.write(`<br>`)

    

    





   





    document.write(`<h4>${RH.archivero}</h4>`)

    //oficinadeRH.archivar("tijeras")

    //window.estancia.archivar("papeles")

    mercadotecnia.archivar("archivos de mercados")
    conta.archivar("activos")
    RH.archivar("Papeleo de los empleados")
    embutidos.archivar("Salsa para bolognesa")
    refrescos.archivar("etiquetado")

}


