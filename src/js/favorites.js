const listFavs = document.querySelector(".js-list-favs");
let favShows = [];
const savedShows = JSON.parse(localStorage.getItem("shows"));
const deleteAllButton = document.querySelector(".js-delete-all");

// Función: pintar las series en la lista de Favoritas
const renderFavs = (shows) => {
  listFavs.innerHTML = "";

  for (const show of shows) {
    const elementLi = document.createElement("li");
    const imgLi = document.createElement("img");
    const titleLi = document.createElement("h3");
    const buttonLi = document.createElement("button");
    elementLi.appendChild(imgLi);
    elementLi.appendChild(titleLi);
    elementLi.appendChild(buttonLi);
    listFavs.appendChild(elementLi);

    elementLi.id = show.mal_id;

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

    const contentButton = document.createTextNode("X");
    buttonLi.appendChild(contentButton);
    buttonLi.classList.add("js-delete-btn");
    buttonLi.id = show.mal_id;

    const deleteButtons = document.querySelectorAll(".js-delete-btn");
    for (const deleteButton of deleteButtons) {
      deleteButton.addEventListener("click", handleDeleteButton);
    }
  }
};

// Función: cuando se hace click en una serie -> destacarla, guardarla en el localStorage y pintarla en la lista de Favoritas
const handleShowClick = (ev) => {
  const idSelectedShow = parseInt(ev.currentTarget.id);

  ev.currentTarget.classList.add("favorite");

  const selectedShow = shows.find((show) => {
    return show.mal_id === idSelectedShow;
  });

  if (!favShows.includes(selectedShow)) {
    favShows.push(selectedShow);
    localStorage.setItem("shows", JSON.stringify(favShows));
  }

  renderFavs(favShows);
};

// Función: cuando se hace click en el botón de eliminar X de la lista de favoritos -> se quita de la lista y se pinta de nuevo
const handleDeleteButton = (ev) => {
  const idDeletedShow = parseInt(ev.currentTarget.id);

  const deletedShow = favShows.findIndex((favShow) => {
    return favShow.mal_id === idDeletedShow;
  });

  favShows.splice(deletedShow, 1);

  localStorage.setItem("shows", JSON.stringify(favShows));

  renderFavs(favShows);
};

// Función: cuando se hace click en la papelera -> se eliminan todos los favoritos del array, se vacía el localStorage y se pinta de nuevo
const handleDeleteAllButton = () => {
  const showsLi = document.querySelectorAll(".js-show");
  for (const showLi of showsLi) {
    showLi.classList.remove("favorite");
  }

  favShows = [];
  renderFavs(favShows);
  localStorage.removeItem("shows");
};

// Si ya hay series favoritas guardadas en el localStorage, se pintan cuando se actualiza la página
if (savedShows !== null) {
  for (const savedShow of savedShows) {
    favShows.push(savedShow);
  }
}

renderFavs(favShows);

deleteAllButton.addEventListener("click", handleDeleteAllButton);
