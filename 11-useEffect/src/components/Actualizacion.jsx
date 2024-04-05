import { useEffect, useState } from "react";

export default function Actualizacion() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(1);
  const [pepe, setPepe] = useState(1);

  useEffect(() => {
    console.log("Hola");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>SUMAR</button>
      <div>
        <h1>{count}</h1>
      </div>
    </div>
  );
}
