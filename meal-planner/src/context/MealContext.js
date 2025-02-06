import { createContext, useState, useEffect } from "react";

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState({
    week1: [],
    week2: [],
    week3: [],
    week4: [],
  });

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setMeals(data.recipes))
      .catch((err) => console.error(err));
  }, []);

  const addMealToWeek = (meal, week) => {
    if (!selectedMeals[week].some((m) => m.id === meal.id)) {
      setSelectedMeals((prev) => ({
        ...prev,
        [week]: [...prev[week], meal],
      }));
    }
  };

  const removeMealFromWeek = (mealId, week) => {
    setSelectedMeals((prev) => ({
      ...prev,
      [week]: prev[week].filter((meal) => meal.id !== mealId),
    }));
  };

  return (
    <MealContext.Provider value={{ meals, selectedMeals, addMealToWeek, removeMealFromWeek }}>
      {children}
    </MealContext.Provider>
  );
};
