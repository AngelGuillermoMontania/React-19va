import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContainPeople from "./views/ContainPeople";
import Welcome from "./views/Welcome";
import ContainPlanet from "./views/ContainPlanet";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
