import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <h1>Esto es el detalle del producto con id {params.idProduct}</h1>
      <Link to="/">Ir al Home</Link>
    </div>
  );
}
