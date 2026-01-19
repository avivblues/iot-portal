import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  req.log?.error({ err }, "Unhandled error");

  if (res.headersSent) {
    return res.end();
  }

  res.status(500).json({ error: "Internal Server Error" });
};
