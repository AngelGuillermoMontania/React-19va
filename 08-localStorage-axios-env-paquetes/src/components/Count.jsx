import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  const Sumar = () => {
    setCount(count + 1); //  count === 1
    console.log(count); // 0    ---- Al demorarse un poco el set, el console se lee mas rapido
    // que lo que el set tarda en cambiar el valor
  };

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={Sumar}>SUMAR</button>
      </div>
    </div>
  );
}
