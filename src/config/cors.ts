import { Express } from "express";
import cors, { CorsOptions } from "cors";

module.exports = async function setupCors(app: Express): Promise<void> {
	const allowedOrigins = [
		"http://localhost:8800",
		"http://127.0.0.1:8800",
		"http://localhost:5500",
		"http://127.0.0.1:5500",
	];

	const config: CorsOptions = {
		origin: (
			origin: string | undefined,
			callback: (err: Error | null, allow: boolean) => void
		) => {
			if (!origin) {
				return callback(null, true);
			}
			if (allowedOrigins.includes(origin)) {
				return callback(null, true);
			}
			const msg = `The CORS policy for this site does not allow access from the origin: ${origin}`;
			console.error(msg);
			return callback(new Error(msg), false);
		},
		methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	};

	app.use(cors(config));

	// Debugging: Test CORS configuration
	app.options("*", cors(config));
}
