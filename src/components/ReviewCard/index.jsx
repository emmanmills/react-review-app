import React from "react";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { truncateStr } from "../../utils/dateFormatter";

const ReviewCard = (props) => {
  const { data, truncateContent = true, index = 0 } = props;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
  });

  return (
    <>
      <Card>
        <CardContent
          sx={{
            padding: isSmallScreen ? "1rem" : "2rem",
          }}
        >
          {data?.place && (
            <Typography variant="h6" component="h3" aria-label="review place">
              {data.place}
            </Typography>
          )}

          {data?.rating && (
            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
              aria-label="review rating"
            >
              {data.rating}
            </Typography>
          )}

          {data?.content && (
            <Typography
              variant="body1"
              sx={{ mb: 1.5, minHeight: "200px" }}
              color="text.secondary"
              aria-label="review content"
              data-testid="review-content"
            >
              {truncateContent ? truncateStr(data.content) : data.content}
            </Typography>
          )}
        </CardContent>
        <CardActions
          sx={{
            padding: isSmallScreen ? "1rem" : "2rem",
          }}
        >
          {data?.author && (
            <Typography
              variant="body2"
              sx={{ mb: 1.5 }}
              aria-label="author"
              data-testid={`author-${index}`}
            >
              {data.author}
            </Typography>
          )}

          {data?.published_at && (
            <Typography
              variant="body2"
              sx={{ mb: 1.5 }}
              color="text.secondary"
              aria-label="publish date"
              data-testid="publish-date"
            >
              {data.published_at}
            </Typography>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default ReviewCard;
