"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setupRatelimit;
const rateLimit = require("express-rate-limit");
function setupRatelimit(app) {
    return __awaiter(this, void 0, void 0, function* () {
        /* Rate Limit Reset in minutes */
        const windowM = 15;
        const exemptedEndpoints = ["/webhook/ratelimit/reset"];
        const config = {
            /* Exempt endpoint from Rate Limiter */
            skip: (req) => exemptedEndpoints.includes(req.url),
            delayAfter: 1, // Allow only one request to go at full-speed.
            delayMs: (hits) => hits * hits * 1000,
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
    });
}
;
