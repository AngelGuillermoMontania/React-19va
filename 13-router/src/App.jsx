import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Header from "./components/Header";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        {/* <Route path="/aboutMe/pantalones" element={<Pantalones />} /> */}
        <Route path="/detail/:idProduct" element={<Detail />} />
        <Route path="*" element={<h1>A DONDE CREE USTED QUE VA?</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
