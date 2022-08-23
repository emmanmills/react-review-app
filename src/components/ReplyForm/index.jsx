import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateReply } from "../../redux/features/reviews";

const ReplyForm = (props) => {
  const { reviewId, replyData = {}, onUpdateHandler = null } = props;
  const [name, setName] = useState("");
  const [reply, setReply] = useState("");
  const [hasNameError, setHasNameError] = useState(false);
  const [hasReplyError, setHasReplyError] = useState(false);
  const dispatch = useDispatch();

  function onSubmitHandler() {
    let authorName = "";
    !reply ? setHasReplyError(true) : setHasReplyError(false);

    if (!replyData.author) {
      // Add new reply message
      !name ? setHasNameError(true) : setHasNameError(false);
      authorName = name || "";
    } else {
      // Edit existing reply message
      authorName = replyData.author;
    }

    // submit form
    if (authorName && reply) {
      const payload = {
        id: reviewId,
        author: authorName,
        content: reply,
        published_at: new Date(),
      };
      dispatch(updateReply(payload));

      if (onUpdateHandler) {
        onUpdateHandler(reply);
      }
    }
  }

  return (
    <div data-testid="reply-form">
      <Box sx={{ mt: 4 }}>
        {!replyData.author && (
          <TextField
            error={hasNameError}
            required
            id="reply-name"
            label="Enter your name"
            sx={{ width: "100%", mb: "1rem", maxWidth: "400px" }}
            inputProps={{ "aria-label": "reply-name" }}
            onChange={(e) => setName(e.target.value.trim())}
            onBlur={(e) =>
              !e.target.value.trim()
                ? setHasNameError(true)
                : setHasNameError(false)
            }
          />
        )}

        <TextField
          error={hasReplyError}
          required
          id="reply-text"
          label="Enter your reply"
          multiline
          InputProps={{
            inputComponent: TextareaAutosize,
          }}
          sx={{ width: "100%", mb: "1rem" }}
          inputProps={{ "aria-label": "reply-text" }}
          onChange={(e) => setReply(e.target.value.trim())}
          onBlur={(e) =>
            !e.target.value.trim()
              ? setHasReplyError(true)
              : setHasReplyError(false)
          }
        />
        <Button
          variant="contained"
          onClick={onSubmitHandler}
          aria-label="submit reply"
        >
          Submit Reply
        </Button>
      </Box>
    </div>
  );
};

export default ReplyForm;
