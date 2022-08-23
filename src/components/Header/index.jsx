import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./index.module.scss";

const Index = (props) => {
  const { title } = props;

  return (
    <AppBar position="static" component="header" data-testid="header">
      <Toolbar sx={{ padding: "0 1rem" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link className={styles.headerLink} to="/">
            {title}
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Index;
