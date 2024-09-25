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
    }
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
    visualizarcatalogo(juegos)
}

function handleOptionChange(selectElement) {
    var selectedValue = selectElement.value;
    var nextSelectId = '';

    // Muestra el mensaje si se elige "No"
    if (selectElement.id === 'option1') {
        if (selectedValue === "No") {
            document.getElementById('mensaje').style.display = 'block';
        } else {
            document.getElementById('mensaje').style.display = 'none';
        }
        nextSelectId = 'option2'; // El siguiente select después de la primera pregunta
    } else {
        // Lógica para mostrar las siguientes preguntas
        var currentId = parseInt(selectElement.id.replace('option', ''));
        nextSelectId = 'option' + (currentId + 1);
        console.log(nextSelectId)
    }

    // Mostrar el siguiente select si no es nulo o indefinido
    if (nextSelectId) {
        var nextSelect = document.getElementById(nextSelectId);
        if (nextSelect) {
            nextSelect.style.display = 'block';
        }
    }
}

