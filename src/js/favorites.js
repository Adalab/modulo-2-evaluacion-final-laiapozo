const listFavs = document.querySelector(".js-list-favs");
let favShows = [];
const savedShows = JSON.parse(localStorage.getItem("shows"));

// Función: pintar las series en la lista de Favoritas 
const renderFavs = (shows) => {
  listFavs.innerHTML = "";

  for (const show of shows) {
    const elementLi = document.createElement("li");
    const imgLi = document.createElement("img");
    const titleLi = document.createElement("h3");
    elementLi.appendChild(imgLi);
    elementLi.appendChild(titleLi);
    listFavs.appendChild(elementLi);

    elementLi.id = show.mal_id;

    if (
      show.images.jpg.image_url ===
      "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
    ) {
      imgLi.setAttribute("src", "https://placehold.co/225x310/e5be3e/FFF");
    } else {
      imgLi.setAttribute("src", show.images.jpg.image_url);
    }

    const contentTitle = document.createTextNode(show.title);
    titleLi.appendChild(contentTitle);
  }
};

// Función: cuando se hace click en una serie: destacarla, guardarla en el localStorage y pintarla en la lista de Favoritas
const handleShowClick = (ev) => {
  const idSelectedShow = parseInt(ev.currentTarget.id);

  ev.currentTarget.classList.add("favorite");

  const selectedShow = shows.find((show) => {
    return show.mal_id === idSelectedShow;
  });

  favShows.push(selectedShow);

  localStorage.setItem("shows", JSON.stringify(favShows));

  renderFavs(favShows);
};

// Si ya hay series favoritas guardadas en el localStorage, se pintan cuando se actualiza la página
if (savedShows !== null) {
  for (const savedShow of savedShows) {
    favShows.push(savedShow);
  }
}

renderFavs(favShows);
