import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Hola Soy El HOME</h1>
      <Link to="/detail/77">Ir al detalle del producto numero 77</Link>
    </div>
  );
}
