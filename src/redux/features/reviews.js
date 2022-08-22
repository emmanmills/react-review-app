import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    value: initialState,
  },
  reducers: {
    initAllReviews: (state, action) => {
      state.value = action.payload;
    },
    updateReply: (state, action) => {
      state.value.forEach((currentState) => {
        if (currentState.id === action.payload.id) {
          currentState.reply = action.payload;
        }
      });
      return state;
    },
  },
});

export const { initAllReviews, updateReply } = reviewsSlice.actions;
export default reviewsSlice.reducer;
