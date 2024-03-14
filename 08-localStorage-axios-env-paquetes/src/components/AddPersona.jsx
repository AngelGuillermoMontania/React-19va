import { useState } from "react";

export default function AddPersona() {
  const [personas, setPersonas] = useState(
    JSON.parse(localStorage.getItem("personas")) || [] //   --- guiño
  );
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);

  function AgregarARo() {
    const newPersonas = [
      ...personas,
      { id: crypto.randomUUID(), nombre, edad },
      // { id: crypto.randomUUID(), nombre, edad },
    ];
    setPersonas(newPersonas);
    localStorage.setItem("personas", JSON.stringify(newPersonas));
  } // NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

  /* personas.map((elem) => elem.nombre) */ // console.log("HOLA"); /* NOOOOOOOOOOOOOOOOOO */

  /* if (personas.length > 2) {
    return <h1>HAY MAS DE 2 PERSONAS</h1>;
    // NOOOOO, se considera codigo suelto o sin encapsular y el doble return no es
    // bueno a la hora de leer el codigo
    // SIEMPRE HACER LO IMPOSIBLE PARA TENER UN SOLO RETURN DEL COMPONENTE
  } */

  return (
    <div>
      {personas.length > 2 ? (
        <h1>HAY MAS DE 2 PERSONAS</h1>
      ) : (
        personas.map((persona) => <h1 key={persona.id}>{persona.nombre}</h1>)
      )}
      <input
        type="text"
        placeholder="Ingrese nombre"
        onChange={(e) => setNombre(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Ingrese edad"
        onChange={(e) => setEdad(e.target.value)}
      ></input>
      <button onClick={AgregarARo}>AGREGAR PERSONA!</button>
    </div>
  );
}
