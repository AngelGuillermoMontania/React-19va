import "./App.css";
import ContainCard from "./components/ContainCard";

function App() {
  let datos = [
    { name: "Guillermo", id: 1 },
    { name: "Rocio", id: 2 },
  ];

  function eliminarPersona(id) {
    // 2
    datos = datos.filter((persona) => persona.id != id);
    console.log(datos);
  }

  return (
    <>
      {/* <Header datos={datos} /> */}
      {/* <Carrusel datos={datos} /> */}
      <ContainCard eliminarPersona={eliminarPersona} datos={datos} />
    </>
  );
}

export default App;

/* 
function sumar (n1,n2) {
  return n1 + n2 * 5
}     ----->   17

function sumar (n1,n2) {
  return (n1 + n2) * 5
}  -----> 25

sumar(2,3)
*/
