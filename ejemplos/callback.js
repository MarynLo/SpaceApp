function uno (dos) {
    console.log("uno")
    setTimeout(dos, 2000)
}

function dos () {
    console.log("dos")

}

// funcion asincrona
setTimeout(() => uno(dos),5000)


//  callback hell
//  setTimeout(() => uno(
//     () => dos(
//         () => tres(
//             () => cuatro(
//                 () => cinco(),)))), 3000);


// funcion anonima: no lleva un nombre 

const nombre = function() {
    console.log("nombre")
}

nombre();

const persona = () => console.log("Marisol")

persona();

() => console.log()

