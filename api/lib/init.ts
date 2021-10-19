/**
 * Application init
 *
 * Sets up all the things we need to us! You know what they are.
 *
 * @module lib/init
 */

import winston from "winston";

/**
 * Logger
 * @constant
 */
const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

export { logger };
