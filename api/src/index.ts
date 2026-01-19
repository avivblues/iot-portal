import express from "express";

const app = express();
const port = Number(process.env.PORT) || 4000;
const host = process.env.HOST || "0.0.0.0";

app.use(express.json());

app.get("/health", (_req, res) => {
	res.json({ ok: true });
});

app.listen(port, host, () => {
	console.log(`API listening on http://${host}:${port}`);
});
