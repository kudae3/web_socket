import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Server } from 'socket.io';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (res, req) => {
  req.sendFile(__dirname + "/public/index.html");
});

let server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});

const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`New client connected: ${socket.id}`);
});