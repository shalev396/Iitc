import express, { Request, Response } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import mongoose from "mongoose";
import Message from "./models/Message";
import { IMessage, IJoinRoomData } from "../shared/types";
import cors from 'cors';

const app = express();
app.use(cors());
const http = createServer(app);
const io = new Server(http, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

mongoose.connect(
  "mongodb+srv://shalev396:opaDZu1F0jIYpa8h@cluster0.2cee7.mongodb.net/"
);

const CHAT_ROOMS: string[] = ["General", "Sports", "Movies"];

io.on("connection", (socket: Socket) => {
  socket.on("joinRoom", async ({ room, username }: IJoinRoomData) => {
    socket.join(room);
    socket.to(room).emit("userJoined", `${username} has joined the room`);

    const messages = await Message.find({ room })
      .sort({ timestamp: -1 })
      .limit(10);
    socket.emit("previousMessages", messages.reverse());
  });

  socket.on("leaveRoom", ({ room, username }: IJoinRoomData) => {
    socket.leave(room);
    socket.to(room).emit("userLeft", `${username} has left the room`);
  });

  socket.on("sendMessage", async (messageData: IMessage) => {
    const { room, username, message } = messageData;
    const newMessage = new Message({
      room,
      username,
      message,
      timestamp: new Date(),
    });
    await newMessage.save();
    io.to(room).emit("receiveMessage", newMessage);
  });
});

app.get("/api/rooms", (_req: Request, res: Response) => {
  res.json(CHAT_ROOMS);
});

const PORT = process.env.PORT || 5000;
http.listen(PORT, () => console.log(`Server running on port ${PORT}`));
