import "./App.css";
import Prueba from "./components/Prueba";

function App() {
  const data = {
    personas: [
      {
        nombre: "tanto",
        img: "www,sadjgdsa",
      },
      {
        nombre: "tanto",
        img: "www/dsabdsa",
      },
    ],
  };

  function algo() {
    if (data.personas.cosa[0].tanto) {
    }
  }
  return (
    <>
      {data?.personas?.map((persona) => (
        <h1>{persona.nombre}</h1>
      ))}
      <Prueba />
      {algo()}
    </>
  );
}

export default App;

// function algo() {
//   if(data.personas.cosa[0].tanto) {
//
// }
//
// }

// bool ? "tahsa" : "fgafas"

// data?.tanto[0]?.persona?.apellido[5] ? "TODO EXISTE" : "NO EXISTE NADA";
