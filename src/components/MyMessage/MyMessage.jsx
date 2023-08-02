import React from "react";
import useStyles, { MessageStyle } from "./style";

const MyMessage = ({ message }) => {
  // console.log("🚀 ~ file: MyMessage.jsx:5 ~ MyMessage ~ message:", message)
  

  const classes = useStyles();
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message?.attachments[0]?.file}
        alt="message-attachment"
        sx={{ float: "right" }}
        className={classes.messageImage}
      />
    );
  }
  return (
    <>
      <MessageStyle>{message?.text}</MessageStyle>
    </>
  );
};

export default MyMessage;
