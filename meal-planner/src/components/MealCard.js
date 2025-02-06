import React, { useState } from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, Button, MenuItem, Select, Snackbar, Alert } from "@mui/material";

const MealCard = ({ meal, addMealToWeek }) => {
  const [selectedWeek, setSelectedWeek] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false); 

  const imageUrl = meal.image;

  const handleAddMeal = () => {
    addMealToWeek(meal, selectedWeek);
    setOpenSnackbar(true); 
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); 
  };

  return (
    <div>
      <Card className="cardsetting" sx={{ maxWidth: 345, m: 2 }}>

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


          <Select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            displayEmpty
            sx={{ mt: 2, width: "100%" }}
          >
            <MenuItem value="">Select Week</MenuItem>
            <MenuItem value="week1">Week 1</MenuItem>
            <MenuItem value="week2">Week 2</MenuItem>
            <MenuItem value="week3">Week 3</MenuItem>
            <MenuItem value="week4">Week 4</MenuItem>
          </Select>
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddMeal}
            disabled={!selectedWeek}
          >
            Add to Week
          </Button>
        </CardActions>
      </Card>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Order saved successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MealCard;
