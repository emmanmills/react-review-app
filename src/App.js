import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import ReviewDetailsPage from "./components/ReviewDetailsPage";
import ReviewPage from "./components/ReviewPage";

const theme = createTheme();

theme.typography.body1 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
};

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Box>
          <Header title="Reviews" />
          <Routes>
            <Route index element={<ReviewPage />} />
            <Route path="review" element={<ReviewPage />} />
            <Route path="review/:id" element={<ReviewDetailsPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
