import { Pool } from "pg";
import { env } from "../config/env";

export const pool = new Pool({
  host: env.pg.host,
  port: env.pg.port,
  database: env.pg.database,
  user: env.pg.user,
  password: env.pg.password
});

pool.on("error", (error) => {
  console.error("Postgres pool error", error);
});
