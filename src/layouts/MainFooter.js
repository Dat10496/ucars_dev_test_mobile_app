import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Box, Typography } from "@mui/material";

const styleBox = {
  "&: hover": {
    cursor: "pointer",
  },
  textAlign: "center",
};

function MainFooter() {
  return (
    <>
      <Box
        sx={{
          minWidth: { xs: 410, sm: 700, md: 900 },
          height: 70,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          mt: 1,
          position: "fixed",
          bottom: "0%",
          backgroundColor: "#FFFFFF",
          boxShadow: 3,
        }}
      >
        <Box sx={styleBox}>
          <HomeRoundedIcon fontSize="small" />
          <Typography fontSize={12} fontWeight={400} color="#232323">
            Home
          </Typography>
        </Box>

        <Box sx={styleBox}>
          <NewspaperRoundedIcon sx={{ color: "#B4B4B4" }} fontSize="small" />
          <Typography fontSize={12} fontWeight={400} color="#B4B4B4">
            News
          </Typography>
        </Box>

        <Box sx={styleBox}>
          <Person2OutlinedIcon sx={{ color: "#B4B4B4" }} fontSize="small" />
          <Typography fontSize={12} fontWeight={400} color="#B4B4B4">
            Profile
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default MainFooter;
