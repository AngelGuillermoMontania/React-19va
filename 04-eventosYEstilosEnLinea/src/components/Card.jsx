const Card = ({ name, id, eliminarPersona }) => {
  const bool = false;

  return (
    <div>
      {bool ? (
        <div>
          <h1>{name}</h1>
          <button onClick={() => eliminarPersona(id)}>Eliminar</button>
        </div>
      ) : (
        <h1>Loading... </h1>
      )}
      {bool && (
        <div>
          <h1>{name}</h1>
          <button onClick={() => eliminarPersona(id)}>Eliminar</button>
        </div>
      )}
    </div>
  );
};
export default Card;
