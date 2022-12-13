import {
  Box,
  Typography,
  styled,
  InputBase,
  Radio,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import AddIcon from "@mui/icons-material/Add";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink } from "react-router-dom";
import { BRAND_LIST } from "../utils/DataSeed";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#F1F1F1",
  "&:hover": {
    backgroundColor: "#f1f1f5",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: 375,
  height: 40,
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#8C8C8C",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "#8C8C8C",
  },
}));

function BrandListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [resultQuery, setResultQuery] = useState(BRAND_LIST);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const handleFilterCar = () => {
      let filterCar = BRAND_LIST;
      filterCar = BRAND_LIST.filter((car) =>
        car.brand.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      );

      setResultQuery(filterCar);
    };

    handleFilterCar();
  }, [searchQuery]);

  return (
    <Box>
      <Box sx={{ minWidth: 375, height: 103 }} name="header">
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
          <Box component={RouterLink} to="/">
            <ArrowBackIosOutlinedIcon />
          </Box>
          <Box>
            <Button
              component={RouterLink}
              to="/add"
              sx={{ color: "black", position: "relative", bottom: 5 }}
              size="small"
            >
              <AddIcon />
            </Button>
            <SwapVertIcon sx={{ ml: 2 }} />
          </Box>
        </Box>
        <Typography fontWeight={600} fontSize={24} ml={2} mt={1}>
          Car Brand List
        </Typography>
      </Box>

      <Box mt={1} name="search">
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "#8C8C8C" }} fontSize="small" />
          </SearchIconWrapper>
          <StyledInputBase
            onChange={handleSearch}
            placeholder="Search for car brand"
          />
        </Search>
      </Box>

      <Box name="body" sx={{ minWidth: 375 }}>
        {resultQuery.map((brand) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: 80,
              p: 1,
            }}
            key={brand.brand}
          >
            <Box
              sx={{
                display: "flex",
                minWidth: 350,
                justifyContent: "space-between",
              }}
              name="logo"
            >
              <Box sx={{ display: "flex" }}>
                <Box component="img" src={brand.logo} alt="logo" width="44px" />

                <Box ml={2}>
                  <Typography fontWeight={400} fontSize={14}>
                    {brand.brand}
                  </Typography>
                  <Typography color="#8C8C8C" fontSize={12} fontWeight={400}>
                    {brand.model}
                  </Typography>
                </Box>
              </Box>

              <Box name="checkbox">
                <Radio />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default BrandListPage;
