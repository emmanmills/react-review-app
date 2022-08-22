import React, { useEffect } from "react";
import ReviewListPage from "../ReviewListPage";
import { useDispatch } from "react-redux";
import { initAllReviews } from "../../redux/features/reviews";
import { getFormattedDateString } from "../../utils/dateFormatter";

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
        localStorage.setItem("reviews", JSON.stringify(transformed));
      })
      .catch((err) => {
        console.log(`Cannot fetch review data with error: ${err}`);
      });
  }, [dispatch]);

  return (
    <>
      <ReviewListPage />
    </>
  );
};

export default ReviewPage;
