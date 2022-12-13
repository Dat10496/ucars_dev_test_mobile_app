import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NEW_CARS } from "../utils/DataSeed";

function NewCar() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(1);

  const handleListCar = () => {
    setFirstNum(firstNum + 1);
    setSecondNum(secondNum + 1);
  };

  useEffect(() => {
    if (secondNum === NEW_CARS.length + 1) {
      setFirstNum(0);
      setSecondNum(1);
    }
  }, [firstNum, secondNum]);

  return (
    <Box
      sx={{
        mt: 3,
        width: 375,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
        <Typography fontWeight={600} fontSize={16}>
          Used Car
        </Typography>
        <ArrowForwardIcon onClick={handleListCar} fontSize="small" />
      </Box>

      <Box sx={{ p: 1 }}>
        {NEW_CARS.slice(firstNum, secondNum).map((car) => (
          <Paper
            sx={{
              width: 350,
              height: 190,
              p: 2,
            }}
            key={car.brand}
          >
            <Box width={224} height={96}>
              <Box
                component="img"
                alt={car.brand}
                src={car.image}
                width="100%"
              />
            </Box>
            <Typography mt={1} mb={0.5} fontWeight={400} fontSize={14}>
              {car.brand}
            </Typography>
            <Typography fontWeight={600} fontSize={14}>
              {car.price}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default NewCar;
