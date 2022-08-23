import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./index";

test("Should render Header Component ok", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(screen.getByTestId("header")).toBeInTheDocument();
});

test("Should render Header Component with props ok", () => {
  const title = "ABC";
  render(
    <BrowserRouter>
      <Header title={title} />
    </BrowserRouter>
  );
  expect(screen.getByText("ABC")).toBeInTheDocument();
});
