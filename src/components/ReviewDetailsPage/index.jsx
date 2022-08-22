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
    (r) => r.id === id
  )[0];

  function onReplyHandler() {
    setShowTextBox(true);
  }

  function onUpdateHandler(updatedReply) {
    console.log("handler", updatedReply);
    setReply(updatedReply);
  }

  useEffect(() => {
    setReply(review.reply);
  }, [review.reply]);

  return (
    <>
      <Box component={"main"} p={3}>
        <Grid item xs={12}>
          <ReviewCard data={review} truncate={false} />
        </Grid>
        {!showTextBox && !review.reply && (
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
        {console.log("updatedReply", reply)}
        {showTextBox && !review.reply && (
          <ReplyForm reviewId={id} onUpdateHandler={onUpdateHandler} />
        )}
        {reply && <ReplyCard reply={review.reply} />}
      </Box>
    </>
  );
};

export default ReviewDetailsPage;
