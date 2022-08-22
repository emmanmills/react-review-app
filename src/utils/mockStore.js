import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getFormattedDateString } from "./dateFormatter";

export const sampleData = [
  {
    id: "123",
    author: "John Doe",
    place: "Big Johns Burgers",
    published_at: getFormattedDateString(
      "Thu Jun 12 1974 11:46:39 GMT-0500 (Central Daylight Time)"
    ),
    rating: 5,
    content: "So good!",
    reply: "Thank you!",
  },
  {
    id: "345",
    author: "Jane Doe",
    place: "Wendy's",
    published_at: getFormattedDateString(
      "Fri Oct 06 1995 21:08:47 GMT-0500 (Central Daylight Time)"
    ),
    rating: 2,
    content: "Meh...",
    reply: "Oh no!",
  },
];

export function createMockStore(mockData) {
  const data = [mockData] || [sampleData[0]];

  const mockReviewsSlice = createSlice({
    name: "reviews",
    initialState: {
      value: data,
    },
    reducers: {
      initAllReviews: (state, action) => {
        state.value = action.payload;
      },
      addReply: (state, action) => {},
      updateReply: (state, action) => {},
    },
  });

  return configureStore({
    reducer: {
      reviews: mockReviewsSlice.reducer,
    },
  });
}
