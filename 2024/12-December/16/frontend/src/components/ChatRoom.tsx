import React, { useState, useEffect, useRef, FC, FormEvent } from "react";
import { Socket, io } from "socket.io-client";
import { IMessage } from "../../../shared/types";

interface ChatRoomProps {
  username: string;
  room: string;
}

const ChatRoom: FC<ChatRoomProps> = ({ username, room }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState<string>("");
  const socketRef = useRef<Socket>();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    socketRef.current = io("http://localhost:5000", {
      transports: ['websocket', 'polling'],
      reconnection: true,
    });

    socketRef.current.on('connect', () => {
      console.log('Connected to server');
      socketRef.current?.emit("joinRoom", { username, room });
    });

    socketRef.current.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });

    socketRef.current.on("previousMessages", (messages: IMessage[]) => {
      setMessages(messages);
    });

    socketRef.current.on("receiveMessage", (message: IMessage) => {
      setMessages((prev) => [...prev, message]);
      new Audio("/message-sound.mp3").play().catch(() => {});
    });

    socketRef.current.on("userJoined", (message: string) => {
      setMessages((prev) => [
        ...prev,
        { system: true, message, room, username: "", timestamp: new Date() },
      ]);
    });

    socketRef.current.on("userLeft", (message: string) => {
      setMessages((prev) => [
        ...prev,
        { system: true, message, room, username: "", timestamp: new Date() },
      ]);
    });

    return () => {
      if (socketRef.current?.connected) {
        socketRef.current.emit("leaveRoom", { username, room });
        socketRef.current.disconnect();
      }
    };
  }, [username, room]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && socketRef.current) {
      socketRef.current.emit("sendMessage", {
        room,
        username,
        message,
        timestamp: new Date(),
      });
      setMessage("");
    }
  };

  return (
    <div className="chat-room">
      <h2>Room: {room}</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.system ? "system" : ""}`}>
            {msg.system ? (
              <em>{msg.message}</em>
            ) : (
              <>
                <strong>{msg.username}: </strong>
                <span>{msg.message}</span>
                <small>{new Date(msg.timestamp).toLocaleTimeString()}</small>
              </>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;
