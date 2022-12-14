import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink } from "react-router-dom";

import headerImg from "../images/headerImg.jpg";
import carBuyerImg from "../images/logo.png";

function MainHeader() {
  return (
    <Box
      height={250}
      minWidth={{ xs: 375, sm: 700, md: 900 }}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        pb: 1,
      }}
    >
      <Box
        sx={{
          minWidth: { xs: 343, sm: 700, md: 900 },
          height: 64,
          position: "fixed",
        }}
      >
        <Box
          sx={{
            minWidth: { xs: 414, sm: 700, md: 900 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            boxShadow: 2,
            height: 64,
          }}
        >
          <Box
            width={343}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box width={120} height={40}>
              <Box component="img" alt="logo" src={carBuyerImg} width="100%" />
            </Box>
            <SearchIcon />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          minWidth: 375,
          height: 64,
        }}
      />

      <Box
        sx={{
          color: "#FFF",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          mt: 1,
          height: 175,
        }}
      >
        <Box width={343} height={142}>
          <Box
            sx={{ borderRadius: 2 }}
            component="img"
            alt="picture"
            src={headerImg}
            width="100%"
          />
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
            <Typography fontWeight={700} fontSize={18}>
              Car Marketplace
            </Typography>

            <Typography sx={{ width: 170 }} fontSize={6} fontWeight={300}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer.
            </Typography>

            <Button
              size="small"
              sx={{ width: 80, height: 18 }}
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
    </Box>
  );
}

export default MainHeader;
