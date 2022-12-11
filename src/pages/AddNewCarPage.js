import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink } from "react-router-dom";

function AddNewCarPage() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [controlBtn, setControlBtn] = useState(true);

  const handleChangeBrand = (e) => {
    setBrand(e.target.value);
  };
  const handleChangeModel = (e) => {
    setModel(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    if (brand !== "" && model !== "" && description !== "") {
      setControlBtn(false);
    } else {
      setControlBtn(true);
    }
  }, [brand, model, description]);

  return (
    <Box sx={{ width: 375 }}>
      <Box
        name="header"
        sx={{
          display: "flex",
          alignItems: "center",
          height: 54,
          borderBottom: "0.5px solid #8C8C8C",
        }}
      >
        <Button component={RouterLink} to="/brand" sx={{ color: "black" }}>
          <ClearRoundedIcon />
        </Button>

        <Typography fontWeight={600} fontSize={14} ml={10}>
          Add Car Brand
        </Typography>
      </Box>

      <Box p={1} name="body">
        <Typography variant="subtitle1" fontWeight={600}>
          Brand Logo
        </Typography>

        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "#E3E3E3",
            border: "1px solid #E3E3E3",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            borderRadius: 20,
            mb: 3,
          }}
        >
          <Typography variant="subtitle1" color="#8C8C8C">
            <AddIcon />
          </Typography>
        </Box>

        <Typography variant="subtitle1" fontWeight={600}>
          Brand Details
        </Typography>

        <Box sx={{ color: "#8C8C8C", height: 350 }}>
          <TextField
            onChange={handleChangeBrand}
            label="Brand Name"
            variant="standard"
            sx={{ width: 360, mt: 1 }}
          />
          <TextField
            onChange={handleChangeModel}
            label="Total Models"
            variant="standard"
            sx={{ width: 360, mt: 1 }}
          />
          <TextField
            onChange={handleChangeDescription}
            label="Description"
            variant="standard"
            sx={{ width: 360, mt: 1 }}
          />
        </Box>

        <Box
          sx={{
            borderTop: "0.5px solid #F1F1F1",
            pb: 2,
            height: 96,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button disabled={controlBtn} sx={{ width: 350 }} variant="contained">
            Create Brand
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddNewCarPage;
