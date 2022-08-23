import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ReviewCard from "../ReviewCard";

const ReviewList = () => {
  const navigate = useNavigate();
  const reviews = useSelector((state) => state.reviews.value);

  return (
    <Box component={"main"} p={3}>
      <Grid container spacing={6}>
        {reviews &&
          reviews.map((review, i) => (
            <Grid
              item
              key={`review-list-${i}`}
              xs={12}
              md={6}
              xl={3}
              onClick={() => {
                navigate(`/review/${review.id}`);
              }}
              data-testid={`review-card-${i}`}
            >
              <ReviewCard data={review} truncate={true} index={i} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default ReviewList;
