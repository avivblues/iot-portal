import dotenv from "dotenv";

dotenv.config();

const toNumber = (value: string | undefined, fallback: number): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export type AppEnv = {
  nodeEnv: string;
  host: string;
  port: number;
  logLevel: string;
  pg: {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
  };
};

export const env: AppEnv = Object.freeze({
  nodeEnv: process.env.NODE_ENV ?? "development",
  host: process.env.HOST ?? "0.0.0.0",
  port: toNumber(process.env.PORT, 4000),
  logLevel: process.env.LOG_LEVEL ?? "info",
  pg: {
    host: process.env.PG_HOST ?? "postgres",
    port: toNumber(process.env.PG_PORT, 5432),
    database: process.env.PG_DB ?? "iot",
    user: process.env.PG_USER ?? "iot",
    password: process.env.PG_PASS ?? "iotpass"
  }
});
