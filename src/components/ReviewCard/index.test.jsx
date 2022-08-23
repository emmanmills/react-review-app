import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReviewCard from "./index";
import { Provider } from "react-redux";
import { createMockStore, sampleData } from "../../utils/mockStore";

let mockStore, data;

beforeEach(() => {
  mockStore = createMockStore();
  data = sampleData[1];
});

test("Should render ReviewCard component ok", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        {<ReviewCard data={data} truncateContent={false} />}
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("review-card")).toBeInTheDocument();
});

test("Should render ReviewCard component with props ok", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        {<ReviewCard data={data} truncateContent={false} />}
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByRole("heading")).toHaveTextContent(/^Wendy\'s$/);
  expect(screen.getByTestId("author-0")).toHaveTextContent(/^Jane Doe$/);
  expect(screen.getByTestId("review-content")).toHaveTextContent(/^Meh...$/);
  expect(screen.getByTestId("publish-date")).toHaveTextContent(
    /^10\/06\/1995$/
  );
});

test("Should show correct 2 star rating", () => {
  const { container } = render(
    <Provider store={mockStore}>
      <BrowserRouter>
        {<ReviewCard data={data} truncateContent={false} />}
      </BrowserRouter>
    </Provider>
  );
  // eslint-disable-next-line testing-library/no-node-access,testing-library/no-container
  expect(container.getElementsByClassName("MuiRating-icon")[0]).toHaveClass(
    "MuiRating-iconFilled"
  );
  // eslint-disable-next-line testing-library/no-node-access,testing-library/no-container
  expect(container.getElementsByClassName("MuiRating-icon")[1]).toHaveClass(
    "MuiRating-iconFilled"
  );
  // eslint-disable-next-line testing-library/no-node-access,testing-library/no-container
  expect(container.getElementsByClassName("MuiRating-icon")[2]).toHaveClass(
    "MuiRating-iconEmpty"
  );
  // eslint-disable-next-line testing-library/no-node-access,testing-library/no-container
  expect(container.getElementsByClassName("MuiRating-icon")[3]).toHaveClass(
    "MuiRating-iconEmpty"
  );
  // eslint-disable-next-line testing-library/no-node-access,testing-library/no-container
  expect(container.getElementsByClassName("MuiRating-icon")[4]).toHaveClass(
    "MuiRating-iconEmpty"
  );
});
