import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const port = 3000;

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

io.on("connection", (socket) => {
  console.log("User Connected");
  console.log("Id", socket.id);

  // //emit -> ussualy we emit from frontend
  // socket.emit("welcome", "Welcome to the server");

  // //broadcast
  // socket.broadcast.emit("welcome", `${socket.id} join the server`);

  // Message received by frontend in backend
  socket.on("message", ({ room, message }) => {
    console.log({ room, message }, "by ", socket.id);

    // Received Message from frontend in backend to Frontend

    // below will show the message to entire server
    // io.emit("received- message", data);

    // Now message will only receive by receivers
    // socket.broadcast.emit("received- message", data)

    // message will only receive by particular receivers // Socket.to will also be  same effect
    io.to(room).emit("received- message", message);
  });

  //Room join
  socket.on("join-room", (room) => {
    socket.join(room);
    console.log(`user join ${room}`);
  });

  // disconnected
  socket.on("disconnect", () => {
    console.log(`${socket.id} is disconnected`);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
