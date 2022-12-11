import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NEW_CARS } from "../utils/DataSeed";

function NewCar() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(1);

  const handleNewCar = () => {
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
    <Box sx={{ mt: 3, width: 375 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
        <Typography fontWeight={600} fontSize={16}>
          New Cars
        </Typography>
        <ArrowForwardIcon onClick={handleNewCar} fontSize="small" />
      </Box>

      <Box sx={{ p: 1 }}>
        {NEW_CARS.slice(firstNum, secondNum).map((car) => (
          <Box sx={{ width: 350, height: 250 }} key={car.brand}>
            <Box component="img" alt={car.brand} src={car.image} width="100%" />

            <Typography
              mb={0.5}
              variant="subtitle2"
              fontWeight={400}
              fontSize={14}
            >
              {car.brand}
            </Typography>
            <Typography fontWeight={600} fontSize={14}>
              {car.price}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default NewCar;
