import { useEffect, useState } from "react";

export default function Montaje() {
  let [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((result) => result.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ border: "5px solid black" }}>
      {characters.map((elem) => (
        <p key={elem.id}>{elem.name}</p>
      ))}
    </div>
  );
}

/* 
Tambien conocido como onMount, es el primer ciclo de vida de un componente, se ejecuta una sola vez, justo despues de que el componente es montado en el DOM.

el useEffect de montaje no hay que poner nada en el array de dependencias, ya que no depende de nada, solo se ejecuta una vez.

En el ejemplo se hace una peticion a la API de Rick and Morty, y se guarda en el estado characters, que se recorre con un map para mostrar los nombres de los personajes.
La forma mas comun de usar el useEffect de montaje es para hacer peticiones a una API, o para hacer alguna tarea que se deba hacer una sola vez, justo despues de que el componente es montado en el DOM.
*/
