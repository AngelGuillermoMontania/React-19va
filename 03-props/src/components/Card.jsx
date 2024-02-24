export default function Card({
  nombre,
  apellido,
  edad,
  ciudad,
  pais,
  zodiaco,
  profesiones,
}) {
  return (
    <div>
      <h1>{nombre}</h1>
      <h1>{apellido}</h1>
      <h1>{edad}</h1>
      <h1>{ciudad}</h1>
      <h1>{pais}</h1>
      <h1>{zodiaco}</h1>

      <div>{profesiones[1].nombre}</div>
    </div>
  );
}

/* 

jime = {
  nombre: "Guillermo",
  apellido: "Montaña"
}

*/
