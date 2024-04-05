import { useState } from "react";
import Actualizacion from "./components/Actualizacion";
import Montaje from "./components/Montaje";
import Desmontaje from "./components/Desmontaje";
import NoHayReloj from "./components/NoHayReloj";

function App() {
  const [verReloj, setVerReloj] = useState(true);

  return (
    <>
      {/* <Montaje /> */}
      {/* <Actualizacion /> */}
      <button onClick={() => setVerReloj(!verReloj)}>Cambiar visual</button>
      {verReloj ? <Desmontaje /> : <NoHayReloj />}
    </>
  );
}

export default App;
