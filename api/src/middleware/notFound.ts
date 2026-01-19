import { Request, Response, NextFunction } from "express";

export const notFound = (req: Request, res: Response, _next: NextFunction) => {
  req.log?.warn({ path: req.path }, "Route not found");
  res.status(404).json({ error: "Not Found" });
};
