import {
  CardMedia,
  Grid,
  Card as CardMUI,
  CardContent,
  Typography,
  CardActions,
  Button,
  ButtonGroup,
  TextField,
  Box,
} from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Card({ calzado }) {
  const navigate = useNavigate();

  const { agregarProducto } = useContext(CartContext);

  const [count, setCount] = useState(1);

  return (
    <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
      <CardMUI sx={{ minWidth: 345 }}>
        <CardMedia
          sx={{ height: 250 }}
          image={calzado.img}
          title="green iguana"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/detail/${calzado.id}`);
          }}
        />
        <CardContent
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/detail/${calzado.id}`);
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {calzado.marca}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {calzado.descripcion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            El stock es: {calzado.stock}
          </Typography>
        </CardContent>
        <CardActions>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              variant="outlined"
              type="number"
              size="small"
              onChange={(e) => {
                e.stopPropagation();
                if (
                  Number(e.target.value) > 0 &&
                  calzado.stock >= Number(e.target.value)
                ) {
                  setCount(Number(e.target.value));
                }
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
              value={count}
            />
            <ButtonGroup>
              <Button
                aria-label="reduce"
                disabled={count == 1}
                onClick={(e) => {
                  e.stopPropagation();
                  if (count > 1) {
                    setCount(count - 1);
                  }
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                aria-label="increase"
                disabled={calzado.stock == count}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(calzado);
                  if (calzado.stock >= count + 1) {
                    setCount(count + 1);
                  }
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Box>
          <Button
            variant="contained"
            onClick={(e) => {
              e.stopPropagation();
              agregarProducto(calzado, count);
            }}
          >
            Agregar al carrito
          </Button>
        </CardActions>
      </CardMUI>
    </Grid>
  );
}
