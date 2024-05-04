import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContainPeople from "./views/ContainPeople";
import Welcome from "./views/Welcome";
import ContainPlanet from "./views/ContainPlanet";
import DetailPeople from "./views/DetailPeople";
import DetailPlanet from "./views/DetailPlanet";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/people" element={<ContainPeople />} />
          <Route path="/planet" element={<ContainPlanet />} />
          <Route path="/people/:id" element={<DetailPeople />} />
          <Route path="/planet/:id" element={<DetailPlanet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
