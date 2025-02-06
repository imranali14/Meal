import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { MealContext } from "../context/MealContext";
import MealCard from "./MealCard";

const MealList = () => {
  const { meals, addMealToWeek } = useContext(MealContext);

  return (
    <Grid container spacing={2} className="list">
      {meals.map((meal) => (
        <Grid item xs={12} sm={6} md={4} key={meal.id}>
          <MealCard meal={meal} addMealToWeek={addMealToWeek} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MealList;

