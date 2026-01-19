import type { Logger } from "pino";

declare module "http" {
  interface IncomingMessage {
    log: Logger;
  }
}

declare module "express-serve-static-core" {
  interface Request {
    log: Logger;
  }
}
