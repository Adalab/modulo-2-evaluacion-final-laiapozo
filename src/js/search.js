/*
    - Seleccionar botón, texto de la usuaria, lista
    - Cuando la usuaria haga click en el botón:
        · Guardamos valor del input del texto
        · Hacer petición con el valor del input al final de la API
        · Con la info que recibimos:
            > Guardamos título e imagen
            > Si la imagen es igual a la url que no tiene imagen
                - Añadir imagen placeholder
            > Sino: añadimos imagen que nos envía el servidor
            > Pintamos la tarjeta en el HTML
*/

const submitButton = document.querySelector(".js-submit-btn");
const textInput = document.querySelector(".js-txt-search");
const listShows = document.querySelector(".js-list-shows");
let shows = [];

const renderAnime = (shows) => {
  listShows.innerHTML = "";

  for (const show of shows) {
    const elementLi = document.createElement("li");
    const imgLi = document.createElement("img");
    const titleLi = document.createElement("h3");
    elementLi.appendChild(imgLi);
    elementLi.appendChild(titleLi);
    listShows.appendChild(elementLi);

    elementLi.classList.add(show.mal_id);

    if (show.images.jpg.image_url === "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png") {
      imgLi.setAttribute("src", "https://placehold.co/225x310/e5be3e/FFF");
    } else {
      imgLi.setAttribute("src", show.images.jpg.image_url);
    }

    const contentTitle = document.createTextNode(show.title);
    titleLi.appendChild(contentTitle);
  }
};

const handleSearchClick = (ev) => {
  ev.preventDefault();
  const text = textInput.value;

  fetch(`https://api.jikan.moe/v4/anime?q=${text}`)
    .then((response) => response.json())
    .then((data) => {
      shows = data.data;
      renderAnime(shows);
    });
};

submitButton.addEventListener("click", handleSearchClick);
