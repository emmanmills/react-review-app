import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createMockStore, sampleReply } from "../../utils/mockStore";
import ReplyCard from "./index";

let mockStore, reply;

beforeEach(() => {
  mockStore = createMockStore();
  reply = sampleReply;
});

test("Should render ReplyCard component ok", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>{<ReplyCard />}</BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("reply-card-component")).toBeInTheDocument();
});

test("Should render ReplyCard component with props ok", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>{<ReplyCard reply={reply} />}</BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("reply-card-header")).toHaveTextContent(
    /^A sample reply$/
  );
  expect(screen.getByTestId("author")).toHaveTextContent(/^Snoopy Twinkle$/);
  expect(screen.getByTestId("publish-date")).toHaveTextContent(
    /^10\/06\/1995$/
  );
});

test("Should show reply form when click reply", async () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>{<ReplyCard reply={reply} />}</BrowserRouter>
    </Provider>
  );
  fireEvent.click(screen.getByTestId("MoreHorizIcon"));
  await waitFor(() => screen.findAllByTestId("edit-reply"));
  fireEvent.click(screen.getByTestId("edit-reply"));
  await waitFor(() => screen.findAllByTestId("reply-form"));
  expect(screen.getByTestId("reply-form")).toBeInTheDocument();
});
