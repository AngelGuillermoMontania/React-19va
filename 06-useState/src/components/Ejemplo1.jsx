export default function Ejemplo1() {
  let count = 1;

  function sumar() {
    count = count + 1;
    console.log(count);
  }

  function restar() {
    count = count - 1;
    console.log(count);
  }

  return (
    <div>
      <h1>Count: {count}</h1> {/* Count: 1 */}
      <div>
        <button onClick={sumar}>SUMAR</button>
        <button onClick={restar}>RESTAR</button>
      </div>
    </div>
  );
}
