import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReplyCard from "../ReplyCard";
import ReplyForm from "../ReplyForm";
import ReviewCard from "../ReviewCard";

const ReviewDetailsPage = () => {
  const [showTextBox, setShowTextBox] = useState(false);
  const [reply, setReply] = useState("");
  const { id } = useParams();
  const review = useSelector((state) => state.reviews.value).filter(
    (r) => r?.id === id
  )[0];

  function onReplyHandler() {
    setShowTextBox(true);
  }

  function onUpdateHandler(updatedReply) {
    setReply(updatedReply);
  }

  const onCancelHandler = () => {
    setShowTextBox(false);
  }

  useEffect(() => {
    if (review && review.reply) {
      setReply(review.reply);
    }
  }, [review]);

  return (
    <>
      <Box component={"main"} p={3} data-testid="review-detail-page">
        <Grid item xs={12}>
          <ReviewCard data={review} truncate={false} />
        </Grid>
        {!showTextBox && !review?.reply && (
          <Box sx={{ "& button": { mt: 4 } }}>
            <Button
              variant="contained"
              onClick={onReplyHandler}
              aria-label="reply to this review"
            >
              Reply to This Review
            </Button>
          </Box>
        )}
        {showTextBox && !reply && (
          <ReplyForm reviewId={id} onUpdateHandler={onUpdateHandler} onCancelHandler={onCancelHandler} />
        )}
        {reply?.id && (
          <ReplyCard reply={review?.reply} onUpdateHandler={onUpdateHandler} />
        )}
      </Box>
    </>
  );
};

export default ReviewDetailsPage;
