"use strict"

const Prompt = require('prompt-sync')()

//function aprobacion(t,p)
//{
    
//}

//function reprobaciont(t)
//{
    
//}

//function reprobacionp(p)
//{
    
//}

let x = 0;

do 
{

    console.log("Bienvenidos al penetron 3000, aquí verán cosas de clima y así")
    console.log("Joven caballero, introduzca sus variables y le diremos qué clima hace")
    let T = Prompt("La temperatura es Alta (Presione A) (70° a 25°), Media (Presione M) (25° a 0°), Baja (Presione B) (-70° a 0°): ")
    let P = Prompt("La presión es Alta (Presione P) (1 a 2 atm), Baja (Presione Q) (0.5 a 1 atm): ")

    
        switch(T,P)
        {
            case "A","Q"://(((T <= 70) && (T > 25)) && ((0.5 <= P) && (P < 1))):
                console.log("")    
                console.log("Parece que tendremos un día soleado, no salgan bombones o se derriten")
                break
            case "M","P"://(((0 <= T) && (T < 25)) && ((P <= 2) && (P > 1))):
                console.log("")
                console.log("Parece que va a llover, el cielo se está nublando")
                break
            case "B","Q"://(((-70 <= T) && (T < 0)) && ((0.5 <= P) && (P < 1))):
                console.log("")    
                console.log("Habrá nieve y estará más frío que el corazón de tu ex")
                break
            case "M","Q"://(((0 < T) && (T < 25)) && ((0.5 <= P) && (P < 1))):
                console.log("")
                console.log("Clima normalito, nada de qué preocuparse")
                break
            case "A","P":
                console.log("")    
                console.log("No es un clima muy normal")
                break
            case "B","P":
                console.log("")    
                console.log("No es un clima muy normal")
                break
            default:
                console.log("")
                console.log("Hable bien chamaco jajaja no le estoy pidiendo más que A,M,B en temperatura y P,Q en presion")
                break
        }
        /*
        switch(T)
        {
        case (T > 80):
            console.log("¿Crees que estaríamos vivos a estas temperaturas? Ya ni los de Alaska")
            break
        case(T > 70):
            console.log("Creo que estamos rostizados entonces")
            break
        case(T < -273.15):
            console.log("Carnal esa temperatura ni existe")
            break
        default:
            console.log("Hola")
            break
        }
        
        switch(P)
        {
        case(P > 2):
            console.log("Estamos en mar o hay un aplastamiento, ufff")
            break
        case(P < 0.5):
            console.log("Creo que te falta aire bro, o qué se yo")
            break
        }
        */
    
    console.log("")
    console.log("Bueno, ¿quieres seguir probando? Si quieres seguir aprieta 0, si dices que no, \naprieta cualquier numero")

    x = Number(Prompt(""))

} while(x===0)


