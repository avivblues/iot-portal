import { app } from "./app";
import { env } from "./config/env";

const server = app.listen(env.port, env.host, () => {
	console.log(`API listening on http://${env.host}:${env.port}`);
});

server.on("error", (error) => {
	console.error("API server failed to start", error);
	process.exit(1);
});
