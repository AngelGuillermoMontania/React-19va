import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebaseConfig";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CartContext } from "../context/CartContext";

export default function DetailProduct() {
  const [producto, setProducto] = useState({});

  const { agregarProducto } = useContext(CartContext);

  const { idProduct } = useParams();

  useEffect(() => {
    async function obtenerUnDocumento() {
      // 1- Obtiene la referencia indicandole con cual documento quiero trabajar
      const docRef = doc(db, "producto", idProduct);

      // 2- Obtiene todo lo que se encuentra en esa referencia
      const docSnap = await getDoc(docRef);

      // 3- Consulto si existe
      if (docSnap.exists()) {
        // Si existe lo guardo en el estado correspondiente
        setProducto({ id: docSnap.id, ...docSnap.data() });
      } else {
        // Si no existe muetro un mensaje por consola
        console.log("No existe ese documento!");
      }
    }
    obtenerUnDocumento();
  }, [idProduct]);
  return (
    <Container sx={{ marginY: "20px" }}>
      {" "}
      <Card
        sx={{ display: "flex", justifyContent: "space-between" }}
        elevation={12}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography component="div" variant="h5">
              {producto.marca}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {producto.modelo}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {producto.descripcion}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {producto.precio}
            </Typography>
          </CardContent>
        </Box>
        <Box>
          <CardContent onClick={() => agregarAlCarrito(producto, 1)}>
            <Button>Agregar al carrito</Button>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 500, height: 500 }}
          image={producto.img}
          alt={producto.descripcion}
        />
      </Card>
    </Container>
  );
}
