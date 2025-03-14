/*
    - Crear lista favShows
    - Seleccionar todos los lis (selectorALL)
    - Por cada elemento li escuchar si ha hecho click
    - Cuando la usuaria haga click:
        > Guardar el id
        > Buscar shows con ese id
        > Añadir shows a la nueva lista favShows
        > Añadir clase favorite al li
        > Pintar favShows a la izquierda
*/

let favShows = [];

const handleShowClick = (ev) => {
  const idSelectedShow = parseInt(ev.currentTarget.id);
  const selectedShow = shows.find((show) => {
    return show.mal_id === idSelectedShow;
  });
  favShows.push(selectedShow);

  
};
