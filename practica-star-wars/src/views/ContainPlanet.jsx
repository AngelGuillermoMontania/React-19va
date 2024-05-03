import { Box, Container, Grid } from "@mui/material";
import React from "react";
import CardPeople from "../components/CardPeople";
import fondo from "../assets/images/fondo/fondoPlanet.jfif";
import CardPlanet from "../components/CardPlanet";

export default function ContainPlanet() {
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
          <CardPlanet />
          <CardPlanet />
          <CardPlanet />
          <CardPlanet />
        </Grid>
      </Container>
    </Box>
  );
}
