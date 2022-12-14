import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { POPULAR_BRANDS } from "../utils/DataSeed";

function PopularBrands() {
  return (
    <Box
      sx={{
        minWidth: 350,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box mb={1} sx={{ width: { xs: 375, sm: 700 } }}>
        <Typography ml={1} fontWeight={600} fontSize={16}>
          Popular Brands
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: 375, sm: 700, md: 1024 },
        }}
      >
        <Grid container columns={10} spacing={1}>
          {POPULAR_BRANDS.map((brand) => (
            <Grid item key={brand.brand} xs={2} sm={2} lg={1}>
              <Box
                sx={{
                  textAlign: "center",
                  width: 67,
                  height: 66,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box width={40} height={40}>
                  <Box
                    component="img"
                    alt="logo"
                    src={brand.logo}
                    width="100%"
                  />
                </Box>
                <Typography fontSize={12} fontWeight={400}>
                  {brand.brand}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default PopularBrands;
