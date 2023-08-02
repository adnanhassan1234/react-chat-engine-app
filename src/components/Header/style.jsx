import { Box, Typography, styled } from "@mui/material";

export const StyleBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.7rem",
  color:'white',
  backgroundColor:'#4A5163',
}));
export const StyleTypography = styled(Typography)(() => ({
  backgroundColor: "white",
  cursor: "pointer",
  padding: "0.3rem 1.2rem",
  borderRadius: "4px",
  cursor:'pointer',
  color:'black',
}));
