import React, { useState, FC } from "react";
import JoinRoom from "./components/JoinRoom";
import ChatRoom from "./components/ChatRoom";
import { IChatState } from "../../shared/types";
import "./App.css";

const App: FC = () => {
  const [chatState, setChatState] = useState<IChatState>({
    joined: false,
    username: "",
    room: "",
  });

  const handleJoin = (username: string, room: string) => {
    setChatState({
      joined: true,
      username,
      room,
    });
  };

  return (
    <div className="App">
      {!chatState.joined ? (
        <JoinRoom onJoin={handleJoin} />
      ) : (
        <ChatRoom username={chatState.username} room={chatState.room} />
      )}
    </div>
  );
};

export default App;
