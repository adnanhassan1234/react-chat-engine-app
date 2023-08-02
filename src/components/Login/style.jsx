import { Box,  Button,  TextField,  Typography,  styled } from "@mui/material";

export const LoginStyle = styled(Box)(() => ({
   height:'100vh',
background: 'linear-gradient(198deg, rgba(255,255,255,1) 0%, rgba(19,10,182,1) 26%, rgba(26,21,170,1) 73%, rgba(155,154,221,1) 96%, rgba(246,250,248,1) 100%, rgba(246,250,248,1) 100%)',
margin:'auto',
}));
export const BoxStyle = styled(Box)(() => ({
maxWidth:'550px',
margin:'auto',
display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));
export const StyleButton = styled(Button)(() => ({
textAlign:'center',
margin:'auto',
cursor:"ponter",
display: 'flex', justifyContent: 'center', alignItems: 'center',
}));
export const StyleTypography = styled(Typography)(() => ({
textAlign:'center',
margin:'auto',
marginBottom:'16px',
}));
export const StyleTextField = styled(TextField)(() => ({
borderRadius:'9px',
}));
export const StyleBtn = styled(Button)(() => ({
backgroundColor:'white',
fontWeight:'500',
color:'black',
cursor:"ponter",
"&:hover": {
    backgroundColor:'white',
    color:'black',
  },
}));


