import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const CustomSlider = ({
  decimalLength = 0,
  initial = 0,
  min = 0,
  max = 100,
  onValueChange,
  stepSize = 1,
}) => {
  const [val, setVal] = useState(initial);

  const handleChange = (_, newValue) => {
    setVal(newValue.toFixed(decimalLength));
  };

  const handleChangeCommitted = (_, newValue) => {
    if (onValueChange) {
      onValueChange(newValue.toFixed(decimalLength));
    }
  };

  const marks = [
    {
      value: min,
      label: min.toFixed(decimalLength),
    },
    {
      value: max,
      label: max.toFixed(decimalLength),
    },
  ];

  return (
    <Box className="pt-2 px-2">
      <Slider
        marks={marks}
        step={stepSize}
        value={parseFloat(val)}
        valueLabelDisplay="on"
        min={min}
        max={max}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
        sx={{
          "& .MuiSlider-valueLabel": {
            top: "2px",
            fontSize: 12,
            fontWeight: "normal",
            backgroundColor: "unset",
            color: "var(--text)",
            "&::before": {
              display: "none",
            },
            "& *": {
              background: "transparent",
              color: "var(--text)",
            },
          },
          "& .MuiSlider-markLabel": {
            fontSize: 12,
            fontWeight: "normal",
            backgroundColor: "unset",
            color: "var(--text)",
            "&::before": {
              display: "none",
            },
            "& *": {
              background: "transparent",
              color: "var(--text)",
            },
          },
        }}
      />
    </Box>
  );
};

export default CustomSlider;
