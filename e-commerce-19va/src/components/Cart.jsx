import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Cart() {
  const {
    cart,
    eliminarPorCantidad,
    agregarProducto,
    eliminarProductoPorId,
    limpiarCarrito,
    cantidadEnCarrito,
  } = useContext(CartContext);

  return (
    <Box sx={{ paddingTop: "60px", display: "flex" }}>
      <Container>
        <Grid container>
          {cart.map((product) => (
            <Grid item sx={{ width: "100%" }} key={product.id}>
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
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
                      {product.marca}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {product.modelo}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {product.descripcion}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {product.precio}
                    </Typography>
                  </CardContent>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h5">
                    Cantidad en carrito: {product.cantidad}
                  </Typography>
                  <Box>
                    <ButtonGroup>
                      <Button
                        aria-label="reduce"
                        onClick={() => {
                          eliminarPorCantidad(1, product.id);
                        }}
                      >
                        <RemoveIcon fontSize="small" />
                      </Button>
                      <Button
                        aria-label="increase"
                        disabled={product.stock == product.cantidad}
                        onClick={() => {
                          if (product.stock >= product.cantidad + 1) {
                            agregarProducto(product, 1);
                          }
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    onClick={() => eliminarProductoPorId(product.id)}
                  >
                    Remover
                  </Button>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 200, height: 200 }}
                  image={product.img}
                  alt={product.descripcion}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        {cantidadEnCarrito() ? (
          <Container sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              size="large"
              variant="contained"
              color="error"
              onClick={() => {
                limpiarCarrito();
              }}
            >
              Limpiar Carrito
            </Button>
            <Button size="large" variant="contained" color="success">
              COMPRAR
            </Button>
          </Container>
        ) : (
          <Typography color={"#FFFFFF"} variant="h3">
            No hay productos en el carrito
          </Typography>
        )}
      </Container>
    </Box>
  );
}
