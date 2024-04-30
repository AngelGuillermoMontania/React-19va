import { useState } from "react";
import { Link } from "react-router-dom";
import useCount from "../hooks/useCount";

export default function Home() {
  const { count, sumar, restar } = useCount();

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={restar}>Restar 1 </button>
        <button onClick={sumar}>Sumar 1</button>
      </div>
      <Link to="/detail">Ir al Detalle</Link>
    </div>
  );
}
