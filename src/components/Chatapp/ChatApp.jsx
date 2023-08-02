import { ChatEngine } from "react-chat-engine";
import ChatFeed from "../ChatFeed/ChatFeed";
import Header from "../Header/Header";

const ChatApp = () => {
  return (
    <>
      <Header />
      <ChatEngine
        projectID="e5050798-390f-48af-8226-572c8d2901dd"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        height="95vh"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        
      />
    </>
  );
};

export default ChatApp;
