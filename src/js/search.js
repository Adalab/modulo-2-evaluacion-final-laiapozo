const submitButton = document.querySelector(".js-submit-btn");
const textInput = document.querySelector(".js-txt-search");
const listShows = document.querySelector(".js-list-shows");
let shows = [];

// Función para pintar las series en la lista de Resultados
const renderResults = (shows) => {
  listShows.innerHTML = "";

  for (const show of shows) {
    const elementLi = document.createElement("li");
    const imgLi = document.createElement("img");
    const titleLi = document.createElement("h3");
    elementLi.appendChild(imgLi);
    elementLi.appendChild(titleLi);
    listShows.appendChild(elementLi);

    elementLi.id = show.mal_id;
    elementLi.classList.add("js-show");

    if (
      show.images.jpg.image_url ===
      "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
    ) {
      imgLi.setAttribute(
        "src",
        "https://placehold.co/225x310?text=Image%20not%20found"
      );
      imgLi.setAttribute("alt", "Portada no encontrada");
    } else {
      imgLi.setAttribute("src", show.images.jpg.image_url);
      imgLi.setAttribute("alt", `Portada de ${show.title}`);
    }

    const contentTitle = document.createTextNode(show.title);
    titleLi.appendChild(contentTitle);

    // Escuchar en qué serie se ha hecho click
    const showsHtml = document.querySelectorAll(".js-show");
    for (const showHtml of showsHtml) {
      showHtml.addEventListener("click", handleShowClick);
    }
  }
};

// Función: cuando se hace click en buscar -> se piden al servidor los datos de la serie y se guardan
const handleSearchClick = (ev) => {
  ev.preventDefault();
  const text = textInput.value;

  fetch(`https://api.jikan.moe/v4/anime?q=${text}`)
    .then((response) => response.json())
    .then((data) => {
      shows = data.data;
      renderResults(shows);
    });
};

submitButton.addEventListener("click", handleSearchClick);
