import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import React, { useState, useContext } from "react";
import s from "./styled.module.sass";
import { useDispatch } from "react-redux";
import { firstScaleNumber } from "../../../../store/choiceRange/choiceRange";

const firstScale = (value: any) => {
  return `${value[0]}$`;
};

const secondScale = (value: any) => {
  return `${value[1]}$`;
};

const range = {
  color: "black",
};

const price = {
  fontSize: "12px",
  fontWeight: "bold",
};

export const ChoiceRange = () => {
  const [value, setValue] = useState<any>([0, 1000]);
  const handleChange = (event: Event, newValue: any) => {
    setValue(newValue);
    dispath(firstScaleNumber(value))
  };

  const dispath = useDispatch()

  return (
    <div className={s.price}>
      <div className={s["price-range"]}>Price range</div>
      <Slider
        style={range}
        getAriaLabel={() => "range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
      />
      <div className={s["wrapper-price"]}>
        <Typography style={price}>{firstScale(value)}</Typography>
        <Typography style={price}>{secondScale(value)}</Typography>
      </div>
    </div>
  );
};
