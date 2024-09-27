const videojuegos = [
    {
        nombre: "doom",
        tipo: "shooter",
        descripcion: "Sos un ser divino con el poder de tu voluntad contra hordas de demonios, todo por Daisy.",
        dlc: "Ahora incluye los tres paquetes DLC premium (Unto the Evil, Hell Followed y Bloodfall)",
        imagen: "imagenes/doom.avif"
    },
    {
        nombre: "doom eternal",
        tipo: "shooter",
        descripcion: "Más demonios y más historia de nuestro querido Doomguy.",
        dlc: "Eternal tiene dos DLC - The Ancient Gods Part One y The Ancient Gods Part Two",
        imagen: "imagenes/doom eternal.avif"
    },
    {
        nombre: "hollow knight",
        tipo: "aventura de acción clásica en 2D",
        descripcion: "Una vasija vacía sin alma cuyo único destino es ser la nueva cárcel de un dios ¿malvado?",
        dlc: "La Compañía de Grimm, Saviavida y Buscador de Dioses",
        imagen: "imagenes/hollow night.avif"
    },
    {
        nombre: "dark souls",
        tipo: "soulslike",
        descripcion: "Un no muerto con el único destino de quemarse en la hoguera primigenia o sumir al mundo en oscuridad.",
        dlc: "Artorias of the Abyss",
        imagen: "imagenes/dark souls.jpg"
    },
    {
        nombre: "dark souls II",
        tipo: "soulslike",
        descripcion: "Un no muerto con el único destino de quemarse en la hoguera primigenia o sumir al mundo en oscuridad.",
        dlc: "",
        imagen: "imagenes/dark soul II.jpg"
    },
    {
        nombre: "dark souls II Scholar of the first sin",
        tipo: "soulslike",
        descripcion: "Un no muerto con el único destino de quemarse en la hoguera primigenia o sumir al mundo en oscuridad.",
        dlc: "",
        imagen: "imagenes/dark souls II Scholar of the first sin.jpg"
    },
    {
        nombre: "dark souls III",
        tipo: "soulslike",
        descripcion: "Un no muerto con el único destino de quemarse en la hoguera primigenia o sumir al mundo en oscuridad.",
        dlc: "The Ringed City (Lanzamiento: 28 de marzo de 2017) y Ashes of Ariandel (Lanzamiento: 25 de octubre de 2016) ",
        imagen: "imagenes/dark souls III.jpg"
    },


];

function visualizarcatalogo(juegos) {
    const section = document.querySelector(".listadodejuegos");
    let listado = "";
    juegos.forEach(element => {
        listado += `<div><p>${element.nombre}</p>
        <img class="imagenesbuscado" src="${element.imagen}" alt"${element.nombre}">
        <p>${element.descripcion}</p>
        <p>${element.tipo}</p>
        <p>${element.dlc}</p>
       
        </div>`


    });
    section.innerHTML = listado
}
function filtrarjuego(tipojuego) {
    let juegos = videojuegos.filter((juego) => {
        const juegosfiltrados = juego.tipo == tipojuego;
        return juegosfiltrados
    });
    visualizarcatalogo(juegos);
}
function filtrarnombre(tipojuego) {
    console.log(tipojuego);
    tipojuego = tipojuego.toLowerCase();
    let juegos = videojuegos.filter((juego) => {
        return juego.nombre.includes(tipojuego);
    });
    visualizarcatalogo(juegos)
}

function handleOptionChange(selectElement) {
    const selectedValue = selectElement.value;
    let nextSelectId = '';

    //ID: mensaje_No_option1 o mensaje_Sí_option1
    if (selectedValue == "No") {
        document.getElementById(`mensaje_No_${selectElement.id}`).style.display = 'block';
        document.getElementById(`mensaje_Sí_${selectElement.id}`).style.display = 'none';
    } else {
        document.getElementById(`mensaje_No_${selectElement.id}`).style.display = 'none';
        document.getElementById(`mensaje_Sí_${selectElement.id}`).style.display = 'block';
    }
    console.log(selectElement.id)
    let currentId = parseInt(selectElement.id.replace('option', ''));
    nextSelectId = 'option' + (currentId + 1);
    console.log(nextSelectId)
    document.getElementById(nextSelectId).style.display = "block"

}


