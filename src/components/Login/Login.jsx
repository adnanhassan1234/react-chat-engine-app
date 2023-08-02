import { Box, Snackbar  } from "@mui/material";
import React, { useState } from "react";
import { Alert as MuiAlert } from "@mui/material"; 
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  BoxStyle,
  LoginStyle,
  StyleBtn,
  StyleButton,
  StyleTextField,
  StyleTypography,
} from "./style";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": "e5050798-390f-48af-8226-572c8d2901dd",
      "User-Name": username,
      "User-Secret": password,
    };
  
    try {
      const response = await axios.post("https://api.chatengine.io/chats", null, {
        headers: authObject,
      });
      
      console.log("API response:", response.data);
      
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      navigate("/chat-app");
    } catch (error) {
      setError("Oops! Incorrect credentials");
      setSnackbarOpen(true);
    }
  };
  

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };


  return (
    <>
      <LoginStyle>
        <BoxStyle>
          <Box component="form" onSubmit={handleSubmit}>
            <StyleTypography variant="h4" color="white">
              Chat Application
            </StyleTypography>
            <StyleTextField
              fullWidth
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              required
            />
            <StyleTextField
              type="password"
              fullWidth
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              required
            />
            <StyleButton>
              <StyleBtn type="submit" variant="contained" sx={{ mt: 2 }}>
                Start chatting <KeyboardDoubleArrowRightOutlinedIcon />
              </StyleBtn>
            </StyleButton>
          </Box>
        </BoxStyle>
      </LoginStyle>
      <Snackbar
      open={snackbarOpen}
      autoHideDuration={5000}
      onClose={handleSnackbarClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        severity="error"
        onClose={handleSnackbarClose}
      >
        {error}
      </MuiAlert>
    </Snackbar>
    
    </>
  );
};

export default Login;
