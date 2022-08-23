import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createMockStore, sampleReply } from "../../utils/mockStore";
import ReplyForm from "./index";

let mockStore;

beforeEach(() => {
  mockStore = createMockStore();
});

test("Should render ReplyForm component ok", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>{<ReplyForm />}</BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("reply-form")).toBeInTheDocument();
});

test("Should have the correct value in author name input", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>{<ReplyForm />}</BrowserRouter>
    </Provider>
  );
  const input = screen.getByLabelText("reply-name");
  fireEvent.change(input, { target: { value: "Joan Smith" } });
  expect(input.value).toBe("Joan Smith");
});

test("Should have the correct value in content input", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>{<ReplyForm />}</BrowserRouter>
    </Provider>
  );
  const input = screen.getByLabelText("reply-text");
  fireEvent.change(input, { target: { value: "This is a test reply" } });
  expect(input.value).toBe("This is a test reply");
});

test("Should not submit when author name is empty", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>{<ReplyForm />}</BrowserRouter>
    </Provider>
  );

  const name = screen.getByLabelText("reply-name");
  fireEvent.change(name, { target: { value: "    " } });
  fireEvent.click(screen.getByLabelText("submit reply"));
  expect(name).toBeInvalid();
});

test("Should not submit when reply text is emtpy", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>{<ReplyForm />}</BrowserRouter>
    </Provider>
  );

  const text = screen.getByLabelText("reply-text");
  fireEvent.change(text, { target: { value: "" } });
  fireEvent.click(screen.getByLabelText("submit reply"));
  expect(text).toBeInvalid();
});
