import { Box, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  readReceipt: {
    width: "25px",
    height: "25px",
    borderRadius: "13px",
    margin: "1.5px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "19px",
    border: "1px solid white",
  },
  readReceipts: {
    position: "relative",
    bottom: "6px",
  },
  avatar: {
    width: "22px",
    height: "22px",
    borderRadius: "50px",
  },
}));

export default useStyles;

export const MainStyle = styled(Box)(() => ({
  width: "100%",
  display: "inline-block",
}));

export const ReceiptsStyle = styled(Box)(() => ({
  position: "relative",
  bottom: "6px",
  padding: "7px",
}));

export const FeedStyle = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  overflow: "scroll",
  backgroundColor: "rgb(240, 240, 240)",
}));
export const ContainerTitleStyle = styled(Box)(() => ({
  width: "calc(100% - 36px)",
  padding: "18px",
  textAlign: "center",
}));
export const TitleStyle = styled(Box)(() => ({
  color: "#3389F2",
  fontWeight: 800,
  fontSize: 24,
}));
export const SubTitleStyle = styled(Box)(() => ({
  color: "#000",
  fontWeight: 600,
  fontSize: 12,
  paddingTop: 9,
  display: "flex",
}));
export const MainFormStyle = styled(Box)(() => ({
  height: "100px",
}));
export const MessageFormStyle = styled(Box)(() => ({
  position: "absolute",
  bottom: 0,
  width: "100%",
  margin: "auto",
}));
export const StyleAvatorBox = styled(Box)(() => ({
  display: "flex",
  margin: "2px",
  justifyContent: "center",
}));
