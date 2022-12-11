import { Box, Stack } from "@mui/material";
import React from "react";
import CarType from "../components/CarType";
import LatestNew from "../components/LatestNew";
import NewCar from "../components/NewCar";
import PopularBrands from "../components/PopularBrands";
import UsedCar from "../components/UsedCar";

function HomePage() {
  return (
    <Stack>
      <PopularBrands />

      <CarType />

      <Box name="usedCar">
        <UsedCar />
      </Box>

      <Box name="newCars">
        <NewCar />
      </Box>

      <Box name="latestNews">
        <LatestNew />
      </Box>
    </Stack>
  );
}

export default HomePage;
