import { render, screen } from "@testing-library/react";
import Header from "./index";

test("Header Component", () => {
  const title = "ABC";
  render(<Header title={title} />);
  expect(screen.getByText("ABC")).toBeInTheDocument();
});
