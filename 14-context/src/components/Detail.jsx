import { useContext } from "react";
import { CountContext } from "../context/CountContext";
import { Link } from "react-router-dom";

export default function Detail() {
  const { count } = useContext(CountContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Link to={"/"}>Ir al home</Link>
    </div>
  );
}
