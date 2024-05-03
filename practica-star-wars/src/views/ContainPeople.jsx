import { Box, Container, Grid } from "@mui/material";
import React from "react";
import CardPeople from "../components/CardPeople";
import fondo from "../assets/images/fondo/fondoPeople.jpeg";

export default function ContainPeople() {
  return (
    <Box sx={{ backgroundImage: `url(${fondo})`, minHeight: "90vh" }}>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2}>
          <CardPeople />
          <CardPeople />
          <CardPeople />
          <CardPeople />
        </Grid>
      </Container>
    </Box>
  );
}
