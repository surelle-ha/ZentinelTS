import { Express, Request } from 'express';
const rateLimit = require("express-rate-limit");

export default async function setupRatelimit(app: Express): Promise<void> {
	/* Rate Limit Reset in minutes */
	const windowM = 15;

	const exemptedEndpoints = ["/webhook/ratelimit/reset"];

	const config = {
		/* Exempt endpoint from Rate Limiter */
		skip: (req: Request) => exemptedEndpoints.includes(req.url),

		delayAfter: 1, // Allow only one request to go at full-speed.

		delayMs: (hits: number) => hits * hits * 1000,

		/* 15 minutes */
		windowMs: windowM * 60 * 1000,

		/* Request Limit Per IP Per Window */
		limit: 1000000000,

		/* draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header */
		standardHeaders: "draft-7",

		/* Disable the `X-RateLimit-*` headers */
		legacyHeaders: false,

		/* 429 status = Too Many Requests (RFC 6585) */
		statusCode: 429,

		/* Send custom rate limit header with limit and remaining */
		headers: true,

		/* Do not count failed requests (status >= 400) */
		skipFailedRequests: false,

		/* Do not count successful requests (status < 400) */
		skipSuccessfulRequests: false,

		message: {
			status: 429,
			message: "Too many requests, please try again later.",
		},
	};

	const ratelimit = rateLimit(config);
    app.z.ratelimit.resetKey = ratelimit.resetKey;
    app.z.ratelimit.getKey = ratelimit.getKey;
	app.use("/api", ratelimit);
};
