import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { USED_CARD } from "../utils/DataSeed";

function UsedCar() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(1);

  const handleNewCar = () => {
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
    <Box
      sx={{
        mt: 3,
        width: 375,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
        <Typography ml={1} fontWeight={600} fontSize={16}>
          New Cars
        </Typography>
        <ArrowForwardIcon
          sx={{ mr: 1 }}
          onClick={handleNewCar}
          fontSize="small"
        />
      </Box>

      <Box sx={{ p: 1 }}>
        {USED_CARD.slice(firstNum, secondNum).map((car) => (
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

            <Box
              sx={{
                color: "#5F5F5F",
                mt: 0.5,
              }}
            >
              <Typography fontWeight={400} fontSize={12}>
                {car.date} - {car.odo} - {car.cost}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default UsedCar;
