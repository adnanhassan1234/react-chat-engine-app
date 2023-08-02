import { makeStyles } from '@mui/styles';
import { Box,  styled } from "@mui/material";

const useStyles = makeStyles(() => ({
    messageAvatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        color: 'white',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 48,
  },
  messageImage: {
    marginRight: 18,
    objectFit: 'cover',
    borderRadius: 6,
    height: '30vw',
    maxHeight: 200,
    maxWidth: 200,
    minHeight: 100,
    minWidth: 100,
},
}));

export default useStyles;


export const MessageRowStyle = styled(Box)(() => ({
    float: 'left',
    width: '100%',
    display: 'flex',
    marginLeft: 18,
}));


export const MessageStyle = styled(Box)(() => ({
    padding: 8,
    fontSize: 16,
    borderRadius: 6,
    maxWidth: '60%',
    float:'left',
    marginRight:'18px',
    backgroundColor:'#F1F0F0',
}));