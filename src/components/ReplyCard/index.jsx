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
import { getFormattedDateString } from "../../utils/dateFormatter";
import ReplyForm from "../ReplyForm";

const ITEM_HEIGHT = 48;

const ReplyCard = (props) => {
  const { reply } = props;
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

  return (
    <>
      {!isEdit && (
        <Card sx={{ mt: "2rem" }}>
          <CardHeader
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
                  <MenuItem onClick={handleClose}>{"Edit Reply"}</MenuItem>
                </Menu>
              </>
            }
            sx={{
              "& .MuiCardHeader-title": { fontSize: "1rem" },
              padding: isSmallScreen ? "1rem" : "2rem",
            }}
          />
          <CardContent
            sx={{
              padding: isSmallScreen ? "1rem" : "2rem",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mb: 1.5 }}
              aria-label="author"
              data-testid={`author`}
            >
              {reply.author} {getFormattedDateString(reply.published_at)}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1.5 }}
              color="text.secondary"
              aria-label="publish date"
              data-testid="publish-date"
            ></Typography>
          </CardContent>
        </Card>
      )}
      {isEdit && <ReplyForm reviewId={reply.id} replyData={reply} />}
    </>
  );
};

export default ReplyCard;
