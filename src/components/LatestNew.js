import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LATEST_NEW } from "../utils/DataSeed";

function LatestNew() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(1);

  const handleLatestNew = () => {
    setFirstNum(firstNum + 1);
    setSecondNum(secondNum + 1);
  };

  useEffect(() => {
    if (secondNum === LATEST_NEW.length + 1) {
      setFirstNum(0);
      setSecondNum(1);
    }
  }, [firstNum, secondNum]);
  return (
    <Box sx={{ mt: 3, width: 375, mb: 5, height: 380 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
        <Typography fontWeight={600} fontSize={16}>
          Latest News
        </Typography>
        <ArrowForwardIcon onClick={handleLatestNew} fontSize="small" />
      </Box>

      <Box sx={{ p: 1 }}>
        {LATEST_NEW.slice(firstNum, secondNum).map((car) => (
          <Box sx={{ width: 350, height: 250 }} key={car.id}>
            <Box component="img" alt={car.brand} src={car.image} width="100%" />

            <Box
              sx={{
                width: 43,
                height: 20,
                backgroundColor: "#F1F1F1",
                color: "#5F5F5F",
                mt: 1,
                mb: 1,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Typography fontSize={10}>News</Typography>
            </Box>

            <Typography mt={0.5} mb={0.5} fontSize={14} gutterBottom>
              {car.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                color: "#5F5F5F",
                mt: 0.5,
              }}
            >
              <Typography fontSize={12}>
                {car.author} - {car.time}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default LatestNew;
