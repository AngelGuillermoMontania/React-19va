export default function Prueba({ id }) {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div>
      <button onClick={(e) => handleClick(e)}>HACEME CLICK</button>
    </div>
  );
}
