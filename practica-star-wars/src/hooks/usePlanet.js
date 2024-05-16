import axios from "axios";
import { useState } from "react";

export default function usePeople() {
  const [allPlanet, setAllPlanet] = useState([]);
  const [onePlanet, setOnePlanet] = useState({});

  async function getAllPlanet() {
    try {
      const { data } = await axios("https://swapi.dev/api/planets");
      setAllPlanet(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  async function getPlanetCarrusel() {
    try {
      const { data } = await axios("https://swapi.dev/api/planets");
      setAllPlanet(data.results.slice(0, 4));
      /* Guarda solo 5 personajes/personas */
    } catch (error) {
      console.log(error);
    }
  }

  async function getOnePlanet(id) {
    try {
      const { data } = await axios(`https://swapi.dev/api/planets/${id}`);
      setOnePlanet(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    allPlanet,
    getAllPlanet,
    getPlanetCarrusel,
    getOnePlanet,
    onePlanet,
  };
}
