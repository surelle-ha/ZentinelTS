require("dotenv").config();
import { Express } from "express";
import Redis from "ioredis";

module.exports = async function setupRedis(app: Express): Promise<void> {
	const { env, logger } = app.z;
	try {
		const redisConfig = env.REDIS_CONNECTION
			? { uri: env.REDIS_CONNECTION }
			: {
					port: parseInt(env.REDIS_PORT || "6379", 10),
					host: env.REDIS_HOST || "localhost",
					username: env.REDIS_USERNAME || "",
					password: env.REDIS_PASSWORD || "",
					db: parseInt(env.REDIS_DB || "0", 10),
			  };

		app.z.redis = new Redis(redisConfig);
		await app.z.redis.ping();
		logger.info("Redis connected successfully");
	} catch (error) {
		logger.error("Error connecting to Redis:", error);
	}
}
