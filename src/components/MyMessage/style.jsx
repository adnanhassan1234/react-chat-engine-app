import { makeStyles } from '@mui/styles';
import { Box,  styled } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    messageImage: {
        objectFit: 'cover',
        borderRadius: 6,
        maxHeight: 183,
        maxWidth: 200,
        minHeight: 100,
        minWidth: 100,
        float:'right',
        marginRight: '15px',
  },
}));

export default useStyles;


export const MessageStyle = styled(Box)(() => ({
    padding: 8,
    fontSize: 16,
    borderRadius: 6,
    maxWidth: '60%',
    float:'right',
    marginRight:'18px',
    color:'white',
    backgroundColor:'#3389F2',
}));