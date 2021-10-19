import socketclient, { Socket } from "socket.io-client";
import { Store } from "vuex";

/**
 * @const {Socket} socket
 */
let socket: Socket;

/**
 * Established a connection to the WS server
 */
const connect = (store: Store<any>) => {
  socket = socketclient("ws://localhost:8081");

  /**
   * Logs on successful connection
   */
  socket.on("connect", () => {
    console.log("Successfully created socket connection.", { id: socket.id });
  });

  /**
   * Commits the message to the store on an incoming ws message
   */
  socket.on("message:new", (message) => {
    console.log("incoming message", { message });
    store.commit("newMessage", { message });
  });
};

/**
 * Close the existing connection
 * @function
 */
const close = () => {
  socket.close();
};

export { socket, connect, close };
