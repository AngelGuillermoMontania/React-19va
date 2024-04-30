import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContainCard from "./components/ContainCard";
import Header from "./components/Header";
import CountContextProvider from "./context/CountContext";
import Detail from "./components/Detail";

function App() {
  return (
    <CountContextProvider>
      {/* Children vale lo que esta desde aca hacia abajo */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ContainCard />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      {/* Children vale lo que esta desde aca hacia arriba */}
    </CountContextProvider>
  );
}

export default App;

/* 
----------- CHILDREN ---------------
Es una prop que react arma por detras para nosotros


<Chimichurri>
  <h1>Hola</h1>
  <p>dhjsgajdas</p>
</ Chimichurri>


export default function Chimichurri ({children}) {

  return <div> 
    <section>Soy el section</section>
    <h1>Hola</h1>
    <p>dhjsgajdas</p>
  </div>
}


<div>
  <section>Soy el section</section>
  <h1>Hola</h1>
  <p>dhjsgajdas</p>
</div>

*/
