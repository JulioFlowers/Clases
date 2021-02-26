// 24 feb 21

"use strict"

function listadecompras(a1, a2, a3){

    if( arguments.length >3 )
        console.log("Alto alli forajido")

    else
        console.log(`Te hace falta comprar \n ${a1}, \n ${a2}, \n ${a3}`)

}

listadecompras("Aceite", "Refresco", "Papas")