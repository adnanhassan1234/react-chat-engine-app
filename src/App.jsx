import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import ChatApp from "./components/Chatapp/ChatApp";


function App() {

  return (
    <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chat-app" element={<ChatApp />} />
          </Routes>
    </Router>
  );
}


export default App;

 
