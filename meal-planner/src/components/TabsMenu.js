import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

const TabsMenu = ({ activeTab, setActiveTab }) => {
  const tabs = ["All Meals", "Week 1", "Week 2", "Week 3", "Week 4"];

  return (
    <Box classname="tabsetting" sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
      <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} variant="scrollable">
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabsMenu;
