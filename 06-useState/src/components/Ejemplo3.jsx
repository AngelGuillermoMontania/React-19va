import { useState } from "react";

export default function Ejemplo3() {
  const [personas, setPersonas] = useState([
    {
      id: 1,
      nombre: "Guille",
    },
    {
      id: 2,
      nombre: "Coco",
    },
    {
      id: 3,
      nombre: "Rocio",
    },
  ]);

  function sumar() {
    setPersonas([...personas, { id: crypto.randomUUID(), nombre: "Jime" }]);
  }

  function quitarPersona(idPersona) {
    setPersonas(personas.filter((persona) => persona.id !== idPersona));
    // Todas las personas en que el id sea distinto al pasado por parametro
  }

  return (
    <div>
      {personas.map((persona) => (
        <>
          <h1 key={persona.id}>{persona.nombre}</h1>
          <button onClick={() => quitarPersona(persona.id)}>X</button>
        </>
      ))}
      <div>
        <button onClick={sumar}>SUMAR</button>
      </div>
    </div>
  );
}
