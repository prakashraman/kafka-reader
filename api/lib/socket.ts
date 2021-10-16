import { Server } from "socket.io";
import { logger } from "./init";

const IO = new Server();

/**
 * Send an acknowledgment message on every new connection
 */
IO.on("connection", (socket) => {
  logger.info("new connection", { socketId: socket.id });
  socket.emit("message:welcome", "welcome");
});

export { IO };
