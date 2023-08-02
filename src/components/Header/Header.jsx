import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyleBox, StyleTypography } from "./style";

const Header = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  useEffect(() => {
    if (!username) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/");
  };

  return (
    <>
      <StyleBox>
        <Box>
          <Typography variant="h6">React Chat Group</Typography>
        </Box>
        <Box>
          <StyleTypography variant="body1" onClick={logout}>
            Logout
          </StyleTypography>
        </Box>
      </StyleBox>
    </>
  );
};

export default Header;
