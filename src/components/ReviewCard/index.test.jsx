import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReviewCard from "./index";
import { Provider } from "react-redux";
import { createMockStore } from "../../utils/mockStore";
import { sampleData } from "../../utils/mockStore";

test("Render ReviewList component and load data ok", () => {
  const mockStore = createMockStore();
  const data = sampleData[1];
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
