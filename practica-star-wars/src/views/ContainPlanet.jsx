import { Box, Container, Grid } from "@mui/material";
import CardPlanet from "../components/CardPlanet";
import fondo from "../assets/images/fondo/fondoPlanet.jfif";
import { useEffect } from "react";
import usePlanet from "../hooks/usePlanet";

export default function ContainPlanet() {
  const { allPlanet, getAllPlanet } = usePlanet();

  useEffect(() => {
    getAllPlanet();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${fondo})`,
        minHeight: "90vh",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Grid container spacing={2} direction="column">
          {allPlanet.map((planet) => (
            <CardPlanet key={planet.name} planet={planet} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
