import express from "express";
import { requestLogger } from "./middleware/requestLogger";
import { notFound } from "./middleware/notFound";
import { errorHandler } from "./middleware/errorHandler";
import { routes } from "./routes";
import "./db/pg";

const app = express();

app.use(express.json());
app.use(requestLogger);
app.use(routes);
app.use(notFound);
app.use(errorHandler);

export { app };
