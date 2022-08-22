import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReviewListPage from "./index";
import { Provider } from "react-redux";
import { createMockStore } from "../../utils/mockStore";

test("Render ReviewListPage component ok", () => {
  const mockStore = createMockStore();
  render(
    <Provider store={mockStore}>
      <BrowserRouter>{<ReviewListPage />}</BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("review-card-0")).toBeInTheDocument();
});
