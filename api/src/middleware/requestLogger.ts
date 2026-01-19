import pino from "pino";
import pinoHttp from "pino-http";
import { env } from "../config/env";

const logger = pino({
  level: env.logLevel
});

export const requestLogger = pinoHttp({
  logger,
  customLogLevel: (req, res, err) => {
    if (res.statusCode >= 500 || err) return "error";
    if (res.statusCode >= 400) return "warn";
    return "info";
  }
});

export type RequestLogger = typeof requestLogger;
