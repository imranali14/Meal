import React, { useState, useContext } from "react";
import { MealContext } from "../context/MealContext";
import TabsMenu from "../components/TabsMenu";
import MealList from "../components/MealList";
import { Grid, Card, CardContent, Typography, Button, CardMedia } from "@mui/material";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { selectedMeals, removeMealFromWeek } = useContext(MealContext);

  const handleRedirectToMeals = () => {
    setActiveTab(0); 
  };

  return (
    <div>
      <div className="banner">
        <h1>Optimized Your Meal</h1>
        <p>Select Meal to Add in Week. You will be able to edit, modify, and change the Meal Weeks.</p>
      </div>
      <div className="weekbanner">
        <h1>Week Orders</h1>
      </div>

      <TabsMenu activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 0 && <MealList />} 

      {activeTab > 0 && (
        <>
          {selectedMeals[`week${activeTab}`]?.length === 0 ? (
            <div style={{ textAlign: "center", padding: "20px" }}>
              <Typography variant="h6">No records added. Please add a record.</Typography>
              <Button variant="contained" color="primary" onClick={handleRedirectToMeals}>
                Go to Meal List
              </Button>
            </div>
          ) : (
            <Grid container spacing={2}>
              {selectedMeals[`week${activeTab}`]?.map((meal) => {
                const imageUrl = meal.image;
                return (
                  <Grid item xs={12} sm={6} md={4} key={meal.id}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="200"
                        image={imageUrl}
                        alt={meal.name}
                        onError={(e) => (e.target.src = "path/to/fallback/image.jpg")} 
                      />
                      <CardContent>
                        <Typography variant="h6">{meal.name}</Typography>
                        <Typography variant="body2">{meal.instructions}</Typography>
                        <Typography color="text.secondary">{meal.cuisine}</Typography>
                        <Typography color="text.secondary">⭐ {meal.rating}</Typography>
                      </CardContent>
                      <Button
                        color="error"
                        onClick={() => removeMealFromWeek(meal.id, `week${activeTab}`)}
                      >
                        Remove
                      </Button>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
