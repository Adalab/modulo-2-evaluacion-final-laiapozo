/*
    - Crear lista favShows
    - Seleccionar todos los lis (selectorALL) -> en search.js
    - Por cada elemento li escuchar si ha hecho click -> en search.js
    - Cuando la usuaria haga click:
        > Guardar el id
        > Buscar shows con ese id
        > Añadir shows a la nueva lista favShows
        > Añadir clase favorite al li
        > Pintar favShows a la izquierda
*/
const listFavs = document.querySelector(".js-list-favs");
let favShows = [];

const renderFavs = (favShows) => {
  listFavs.innerHTML = "";

  for (const favShow of favShows) {
    const elementLi = document.createElement("li");
    const imgLi = document.createElement("img");
    const titleLi = document.createElement("h3");
    elementLi.appendChild(imgLi);
    elementLi.appendChild(titleLi);
    listFavs.appendChild(elementLi);

    elementLi.id = favShow.mal_id;

    if (
      favShow.images.jpg.image_url ===
      "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
    ) {
      imgLi.setAttribute("src", "https://placehold.co/225x310/e5be3e/FFF");
    } else {
      imgLi.setAttribute("src", favShow.images.jpg.image_url);
    }

    const contentTitle = document.createTextNode(favShow.title);
    titleLi.appendChild(contentTitle);
  }
};

renderFavs(favShows);

const handleShowClick = (ev) => {
  const idSelectedShow = parseInt(ev.currentTarget.id);
  ev.currentTarget.classList.add("favorite");

  const selectedShow = shows.find((show) => {
    return show.mal_id === idSelectedShow;
  });

  favShows.push(selectedShow);
  
  renderFavs(favShows);
};
