import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { CAR_TYPES } from "../utils/DataSeed";

function CarType() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(5);

  const handleTypeCar = () => {
    setFirstNum(firstNum + 1);
    setSecondNum(secondNum + 1);
  };

  useEffect(() => {
    if (secondNum === CAR_TYPES.length + 1) {
      setFirstNum(0);
      setSecondNum(5);
    }
  }, [firstNum, secondNum]);
  return (
    <Box sx={{ mt: 3, width: 375 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
        <Typography fontWeight={600} fontSize={16}>
          Car Type
        </Typography>

        <ArrowForwardIcon onClick={handleTypeCar} fontSize="small" />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        {CAR_TYPES.slice(firstNum, secondNum).map((type) => (
          <Box
            sx={{ textAlign: "center", width: 59, height: 68 }}
            key={type.type}
          >
            <Box
              component="img"
              alt="carType"
              src={type.logo}
              width="64px"
              height="32px"
            />

            <Typography>{type.type}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CarType;
