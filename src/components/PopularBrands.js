import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { POPULAR_BRANDS } from "../utils/DataSeed";

function PopularBrands() {
  return (
    <Box sx={{ width: 375, mr: 1 }}>
      <Box p={1}>
        <Typography>Popular Brands</Typography>
      </Box>
      <Grid container columnSpacing={{ xs: 10 }} rowSpacing={2}>
        {POPULAR_BRANDS.map((brand) => (
          <Grid item key={brand.brand} xs={2}>
            <Box sx={{ textAlign: "center", width: 69, height: 68 }}>
              <Box
                component="img"
                alt="logo"
                src={brand.logo}
                width="40px"
                height="40px"
              />

              <Typography>{brand.brand}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PopularBrands;
