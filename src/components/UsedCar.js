import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { USED_CARD } from "../utils/DataSeed";

function UsedCar() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(1);

  const handleListCar = () => {
    setFirstNum(firstNum + 1);
    setSecondNum(secondNum + 1);
  };

  useEffect(() => {
    if (secondNum === USED_CARD.length + 1) {
      setFirstNum(0);
      setSecondNum(1);
    }
  }, [firstNum, secondNum]);

  return (
    <Box sx={{ mt: 3, width: 375 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
        <Typography fontWeight={600} fontSize={16}>
          Used Car
        </Typography>
        <ArrowForwardIcon onClick={handleListCar} fontSize="small" />
      </Box>

      <Box sx={{ p: 1 }}>
        {USED_CARD.slice(firstNum, secondNum).map((car) => (
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

            <Box
              sx={{
                display: "flex",
                color: "#5F5F5F",
                mt: 0.5,
              }}
            >
              <Typography fontWeight={400} fontSize={12}>
                {car.date} - {car.odo} - {car.cost}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default UsedCar;
