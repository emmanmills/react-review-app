import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReviewDetailsPage from "./index";
import { Provider } from "react-redux";
import { createMockStore } from "../../utils/mockStore";

let mockStore;

beforeEach(() => {
  mockStore = createMockStore();
});

it("Should render ReviewDetailPage component ok", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>{<ReviewDetailsPage />}</BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("review-detail-page")).toBeInTheDocument();
});

it("Should show 'reply button' when there is no reply", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>{<ReviewDetailsPage />}</BrowserRouter>
    </Provider>
  );
  expect(screen.getByLabelText("reply to this review")).toBeVisible();
});

it("Should show 'reply to this review' when button clicked", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>{<ReviewDetailsPage />}</BrowserRouter>
    </Provider>
  );
  fireEvent.click(screen.getByLabelText("reply to this review"));
  expect(screen.getByTestId("reply-form")).toBeVisible();
});
