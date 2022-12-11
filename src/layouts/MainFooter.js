import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Box, Typography } from "@mui/material";

function MainFooter() {
  return (
    <>
      <Box
        sx={{
          width: 375,
          height: 70,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          mt: 1,
          position: "fixed",
          bottom: "0%",
          backgroundColor: "#FFFFFF",
          borderTop: "0.5px solid #B4B4B4",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <HomeRoundedIcon fontSize="small" />
          <Typography>Home</Typography>
        </Box>

        <Box sx={{ textAlign: "center", color: "#B4B4B4" }}>
          <NewspaperRoundedIcon fontSize="small" />
          <Typography>News</Typography>
        </Box>

        <Box sx={{ textAlign: "center", color: "#B4B4B4" }}>
          <Person2OutlinedIcon fontSize="small" />
          <Typography>Profile</Typography>
        </Box>
      </Box>
    </>
  );
}

export default MainFooter;
