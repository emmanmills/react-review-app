import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Index = (props) => {
  const { title } = props;

  return (
    <AppBar position="static" component="header">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Index;
