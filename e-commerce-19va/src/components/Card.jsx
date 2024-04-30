import {
  CardMedia,
  Grid,
  Card as CardMUI,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Card({ calzado }) {
  const navigate = useNavigate();

  return (
    <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
      <CardMUI
        sx={{ minWidth: 345 }}
        onClick={() => navigate(`/detail/${calzado.id}`)}
      >
        <CardMedia
          sx={{ height: 250 }}
          image={calzado.img}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {calzado.marca}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {calzado.descripcion}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Agregar al carrito</Button>
        </CardActions>
      </CardMUI>
    </Grid>
  );
}
