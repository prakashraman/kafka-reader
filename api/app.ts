/**
 * Express router sets up the debug endpoints and socketio server
 * @module index/routes
 */

import express from "express";
import cors from "cors";

import { IO } from "./lib/socket";
import { logger } from "./lib/init";

/**
 * Express app
 * @const
 */
const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

/**
 * Index
 * @memberof routes
 * @function
 * @name index
 */
app.get("/", (_req, res, _next) => {
  res.json({ success: true, now: new Date() });
});

/**
 * Broadcast a debug message
 * @memberof debug
 * @function
 * @name debug/message
 */
app.post("/debug/message", (_req, res, _next) => {
  IO.local.emit("message:new", new Date().toString());
  res.json({
    success: true,
    message: "broadcasted message on all client connections.",
  });
});

/**
 * Starts the REST server
 * @const
 */
const server = app.listen(8080, function () {
  logger.info("starting server...", { name: app.name, port: 8080 });
});

/**
 * Starts the WS
 */
IO.listen(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});
