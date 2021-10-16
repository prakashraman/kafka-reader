import restify from "restify";
import { Server } from "socket.io";

const server = restify.createServer();
const io = new Server();

io.listen(server.server);

server.get("/", (_req, res, _next) => {
  res.send(`hello: ${new Date()}`);
});

io.sockets.on("connection", (socket) => {
  console.log("sockets on");
});

io.on("connection", (socket) => {
  console.log("new connection found!");
});

server.listen(8080, function () {
  console.log("%s listening at %s", server.name, server.url);
});
