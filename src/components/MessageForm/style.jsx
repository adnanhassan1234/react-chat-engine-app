import { makeStyles } from '@mui/styles';
import { Box,  Button,  TextField,  styled } from "@mui/material";
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const useStyles = makeStyles(() => ({
    imageButton: {
        cursor: 'pointer',
        padding: '0px 12px',
        height: '100%',
  },
}));

export default useStyles;


export const FieldStyle = styled(TextField)(() => ({
    width: 'calc(100% - -15px)',
    border: '1px solid white',
    padding: '0px 18px',
    outline: 'none !important',
    fontSize: '15px',
    border: 'none !important',
}));

export const StyleBox = styled(Box)(() => ({
    overflow: 'hidden',
    borderRadius: '6px',
    border: '1px solid #3389F2',
    backgroundColor: 'white',
}));
export const PictureIconStyle = styled(PhotoSizeSelectActualOutlinedIcon)(() => ({
    top: '0px',
    position: 'absolute',
    fontSize: '22px',
    transform: 'translate(-18px, 28px)',
}));
export const SendIconStyle = styled(SendOutlinedIcon)(() => ({
    top: '1px',
    position: 'relative',
    marginTop:'7px',
    // transform: 'rotate(-90deg)',
}));
export const StyleButton = styled(Button)(() => ({
    backgroundColor: 'white',
    border: '1px solid white',
    padding: '0px 18px',
    cursor: 'pointer',
    marginTop: '-35px',
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    height:'0px'
}));
export const FileUploadStyle = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'flex-end',

}));
