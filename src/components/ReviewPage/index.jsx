import React, { useEffect } from "react";
import ReviewList from "../ReviewList";
import { useDispatch } from "react-redux";
import { initAllReviews } from "../../redux/features/reviews";
import { getFormattedDateString } from "../../utils/viewHelper";

const ReviewPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("review.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        // Reformat json data with the correct date string
        const transformed = data.map((review) => {
          return {
            ...review,
            published_at: getFormattedDateString(review.published_at),
            reply: null,
          };
        });
        dispatch(initAllReviews(transformed));
      })
      .catch((err) => {
        console.log(`Cannot fetch review data with error: ${err}`);
      });
  }, [dispatch]);

  return (
    <>
      <ReviewList />
    </>
  );
};

export default ReviewPage;
