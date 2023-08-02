import React, { useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import { isTyping, sendMessage } from "react-chat-engine";
import useStyles, {
  FileUploadStyle,
  PictureIconStyle,
  SendIconStyle,
  StyleButton,
} from "./style";

const MessageForm = (props) => {

  const classes = useStyles();
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = value.trim();
    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
      // console.log("~ file: MessageForm.jsx:27 ~ handleSubmit ~ text:", text)
      
    }
    setValue("");  
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
  };

  
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ backgroundColor: "white" }}
    >
      <TextField
        fullWidth
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <FileUploadStyle>
        <label htmlFor="file-input">
          <span className={classes.imageButton}>
            <PictureIconStyle />
          </span>
        </label>
        <TextField
          type="file"
          id="file-input"
          multiple={false}
          style={{ display: "none" }}
          onChange={handleUpload}
          margin="normal"
        />
        <StyleButton type="submit">
          <SendIconStyle />
        </StyleButton>
      </FileUploadStyle>
    </Box>
  );
};

export default MessageForm;
