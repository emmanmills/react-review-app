import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReviewList from "./index";
import { Provider } from "react-redux";
import { createMockStore, sampleData } from "../../utils/mockStore";

test("Should render ReviewList component ok", () => {
  const mockStore = createMockStore(...sampleData);
  render(
    <Provider store={mockStore}>
      <BrowserRouter>{<ReviewList />}</BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("review-card-0")).toBeInTheDocument();
});
