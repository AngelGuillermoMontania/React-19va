import { useState } from "react";

export default function Ejemplo5() {
  const [valorInput, setValorInput] = useState("");

  function handleInput(e) {
    setValorInput(e.target.value);
  }

  return (
    <div>
      <h1>valor input: {valorInput}</h1>
      <input
        type="text"
        placeholder="Escriba aqui"
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
}
