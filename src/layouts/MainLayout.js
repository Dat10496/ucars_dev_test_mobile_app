import React from "react";
import { Outlet } from "react-router-dom";
import { Stack, Box, Divider } from "@mui/material";

import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

function MainLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <MainHeader />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />

      <Divider />
      <MainFooter />
    </Stack>
  );
}

export default MainLayout;
