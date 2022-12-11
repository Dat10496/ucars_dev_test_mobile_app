import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink } from "react-router-dom";

import headerImg from "../images/headerImg.jpg";
import carBuyerImg from "../images/Carbuyer.png";

function MainHeader() {
  return (
    <Box height={250} width={375}>
      <Box
        sx={{
          display: "flex",
          width: 375,
          height: 64,
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          position: "fixed",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box component="img" alt="logo" src={carBuyerImg} width="50%" />
        <SearchIcon />
      </Box>

      <Box
        sx={{
          width: 375,
          height: 64,
        }}
      />

      <Box sx={{ color: "#FFF", m: 1, height: 142, position: "relative" }}>
        <Box component="img" alt="picture" src={headerImg} width="100%" />
        <Box
          sx={{
            position: "relative",
            width: 200,
            height: 142,
            left: 10,
            bottom: 130,
            gap: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography fontWeight={700} variant="h6">
            Car Marketplace
          </Typography>
          <Typography fontSize={8} varian="subtitle2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.
          </Typography>

          <Button
            size="small"
            sx={{ width: 100, height: 20 }}
            variant="contained"
            color="error"
            component={RouterLink}
            to="/brand"
          >
            <Typography fontSize={8} varian="subtitle2">
              Get Started
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MainHeader;
