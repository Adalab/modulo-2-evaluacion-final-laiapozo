/*
    - Seleccionar botón y texto de la usuaria
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
let shows = [];

const handleSearchClick = (ev) => {
  ev.preventDefault();
  const text = textInput.value;

  fetch(`https://api.jikan.moe/v4/anime?q=${text}`)
    .then((response) => response.json())
    .then((data) => {
      shows = data.data;
    });
};

submitButton.addEventListener("click", handleSearchClick);
