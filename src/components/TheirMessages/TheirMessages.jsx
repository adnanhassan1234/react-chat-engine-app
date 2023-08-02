import React from "react";
import useStyles, { MessageRowStyle, MessageStyle } from "./style";
import { Box } from "@mui/material";

const TheirMessages = ({ message, lastMessage }) => {
  const classes = useStyles();
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <>
      <MessageRowStyle>
        {isFirstMessageByUser && (
          <div
            className={classes.messageAvatar}
            style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
          />
        )}
        {message?.attachments?.length > 0 ? (
          <img
            src={message?.attachments[0]?.file}
            alt="message-attachment"
            style={{ marginLeft: isFirstMessageByUser ? '4px' : '6px' }}
            className={classes.messageImage}
          />
        ) : (
          <MessageStyle>
            <Box  style={{ marginLeft: isFirstMessageByUser ? '4px' : '2px' }}>
            {message.text}
            </Box>
          </MessageStyle>
        )}
      </MessageRowStyle>
    </>
  );
};

export default TheirMessages;
