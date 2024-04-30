import "./App.css";
import Header from "./components/Header";
import ContainCard from "./components/ContainCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailProduct from "./components/DetailProduct";
import { ThemeProvider, createTheme } from "@mui/material";
import CartContextProvider from "./context/CartContext";

const theme = createTheme({
  palette: {
    dark: {
      main: "#002200",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CartContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ContainCard />} />
            <Route path="/:category" element={<ContainCard />} />
            <Route path="/detail/:idProduct" element={<DetailProduct />} />
          </Routes>
        </CartContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
