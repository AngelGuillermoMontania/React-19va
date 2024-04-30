import { useContext } from "react";
import { CountContext } from "../context/CountContext";
import { Link } from "react-router-dom";

export default function ContainCard() {
  const { count, sumar } = useContext(CountContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={sumar}>SUMAR 1</button>
      </div>
      <Link to={"/detail"}>Ir al detalle</Link>
    </div>
  );
}
