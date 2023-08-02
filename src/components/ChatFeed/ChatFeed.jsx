import React, { useEffect } from "react";
import MyMessage from "../MyMessage/MyMessage";
import TheirMessages from "../TheirMessages/TheirMessages";
import useStyles, {
  MainStyle,
  ReceiptsStyle,
  FeedStyle,
  ContainerTitleStyle,
  TitleStyle,
  SubTitleStyle,
  MainFormStyle,
  MessageFormStyle,
  StyleAvatorBox,
} from "./style";
import MessageForm from "../MessageForm/MessageForm";
import { Box } from "@mui/material";

const ChatFeed = (props) => {
  // console.log("ChatFeed.jsx:18 ~ ChatFeed ~ props:", props);
  const classes = useStyles();
  const { chats, activeChat, userName, messages } = props;

  const chat = chats?.[activeChat];

  const renderReadReceipts = (message, myMessage) => {
    return chat.people?.map(
      (person, index) =>
        person?.last_read === message.id && (
          <Box
            key={index}
            className={classes.readReceipt}
            style={{
              float: myMessage ? "right" : "left",
              backgroundImage: `url(${person?.person?.avatar})`,
            }}
          />
        )
    );
  };

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const myMessage = userName === message?.sender?.username;

      return (
        <Box key={index} style={{ width: "100%" }}>
          <MainStyle>
            {myMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessages
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </MainStyle>
          <ReceiptsStyle>
            <Box
              style={{
                marginRight: myMessage ? "9px" : "0px",
              }}
            >
              <Box className={classes.readReceipts}>
                {renderReadReceipts(message, myMessage)}
              </Box>
            </Box>
          </ReceiptsStyle>
        </Box>
      );
    });
  };


  if (!chat) return <Box>Loading...</Box>;

  return (
    <>
      <FeedStyle>
        <ContainerTitleStyle>
          <TitleStyle>{chat?.title}</TitleStyle>
          <SubTitleStyle>
            {chat?.people?.map((person, index) => (
              <Box key={index}>
                <StyleAvatorBox>
                  <img
                    src={person?.person?.avatar}
                    alt=""
                    className={classes.avatar}
                  />
                  <span> &nbsp;{person?.person?.first_name}</span>
                </StyleAvatorBox>
              </Box>
            ))}
          </SubTitleStyle>
        </ContainerTitleStyle>
        {renderMessages()}
        <MainFormStyle />
        <MessageFormStyle>
          <MessageForm {...props} chatId={activeChat} />
        </MessageFormStyle>
      </FeedStyle>
    </>
  );
};

export default ChatFeed;
