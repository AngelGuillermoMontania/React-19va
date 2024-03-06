import "./App.css";
import ContainCard from "./components/ContainCard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <ContainCard />
    </>
  );
}

export default App;

/* 

APLICACION CON ESTILOS GLOBALES ---  MUY COMUN REPETIR CLASES
  <>    ---------------------> APLICA EL CSS DE APP
    <div>    ------------------------------->   AL APLICARLO DE FORMA GLOBAL, PREVALECEN LOS ESTILOS QUE COLOQUE AQUI
      <h1 className="title">Header</h1>
    </div>
    <ContainCard />
  </>



  .title {
  color: red;
  font-size: 50px;
}
*/
