import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import { useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReplyIcon from "@mui/icons-material/Reply";
import { getCardPadding, getFormattedDateString } from "../../utils/viewHelper";
import ReplyForm from "../ReplyForm";

const ITEM_HEIGHT = 48;

const ReplyCard = (props) => {
  const { reply = {}, onUpdateHandler } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
  });
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setIsEdit(true);
    setAnchorEl(null);
  };

  const onCancelHandler = () => {
    setIsEdit(false);
  }

  return (
    <>
      {!isEdit && (
        <Card
          data-testid="reply-card-component"
          sx={{ mt: "2rem", ...getCardPadding(isSmallScreen) }}
        >
          <div style={{ position: "relative" }}>
            <ReplyIcon
              sx={{
                position: "absolute",
                top: "1.2rem",
                left: "-1.5rem",
                fontSize: "inherit",
              }}
            />
          </div>
          <CardHeader
            data-testid={"reply-card-header"}
            title={reply.content}
            action={
              <>
                <IconButton aria-label="settings" onClick={handleClick}>
                  <MoreHorizIcon />
                </IconButton>
                <Menu
                  id="menu"
                  MenuListProps={{
                    "aria-labelledby": "button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "12ch",
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose} data-testid="edit-reply">
                    {"Edit Reply"}
                  </MenuItem>
                </Menu>
              </>
            }
            sx={{
              padding: "0.8rem 0",
              "& .MuiCardHeader-title": {
                fontSize: "1rem",
              },
            }}
          />
          <CardContent
            sx={{
              padding: "0.8rem 0",
              display: "flex",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mb: 1.5, mr: isSmallScreen ? "0.5rem" : "1rem" }}
              aria-label="author"
              data-testid={`author`}
            >
              {reply.author}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1.5 }}
              color="text.secondary"
              aria-label="publish date"
              data-testid="publish-date"
            >
              {getFormattedDateString(reply.published_at)}
            </Typography>
          </CardContent>
        </Card>
      )}
      {isEdit && (
        <ReplyForm
          reviewId={reply.id}
          replyData={reply}
          onUpdateHandler={onUpdateHandler}
          onCancelHandler={onCancelHandler}
        />
      )}
    </>
  );
};

export default ReplyCard;
