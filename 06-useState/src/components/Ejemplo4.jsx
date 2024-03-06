import { useState } from "react";

export default function Ejemplo4() {
  const [persona, setPersona] = useState({
    nombre: "Guille",
    edad: 31,
  });

  function agregarDato() {
    // profesion: "Profesor"
    setPersona({ ...persona, profesion: "Profesor" });
  }

  return (
    <div>
      {persona.nombre}
      <div>
        <button onClick={agregarDato}>SUMAR</button>
      </div>
    </div>
  );
}
