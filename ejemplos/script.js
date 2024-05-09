
const url = "https://api.nasa.gov/planetary/apod?api_key=eIMFIsWvchIysnggczXTAhc5zdHrc4RWSjb3mQsO&count=15"


async function listaImagenes (){
    try{
        let fetchImagen =  await fetch(url)
        let datosImagenes = await fetchImagen.json()

        console.log(datosImagenes)
        const card = document.querySelector("[data-ul]")

        datosImagenes.forEach( elemento => {
            const contenido = `<li class="card">
            <img class="card__image" src="${elemento.url}" alt="imagen">
            <h3 class="card__title">${elemento.title}</h3>
            </li> `
            card.innerHTML = card.innerHTML + contenido
        });
    }
    catch(error){
        console.log(error)
    }
}

listaImagenes()




// then y catch
// function listaImagenes () {
//     fetch(url)  // es una funcion que puede tener 2 parametros el url y la requisicion 
//     // si la promise retorna como resuelta
//     .then( response => response.json())
//     .then(datosImagenes => {
//         console.log(datosImagenes);

//         const card = document.querySelector("[data-ul]")

//         datosImagenes.forEach( elemento => {
//            const contenido = `<li class="card">
//             <img class="card__image" src="${elemento.url}" alt="imagen">
//             <h3 class="card__title">${elemento.title}</h3>
//         </li> `
//             card.innerHTML = card.innerHTML + contenido
//         });

//     })
//     // si la promise retorna como rechazada
//     .catch(error => console.log(error))
// }

// listaImagenes ()