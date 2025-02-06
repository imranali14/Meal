import React from "react";
import { MealProvider } from "./context/MealContext";
import Home from "./pages/Home";

function App() {
  return (
    <MealProvider>
      <Home />
    </MealProvider>
  );
}

export default App;
