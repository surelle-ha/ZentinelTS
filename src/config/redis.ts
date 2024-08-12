require("dotenv").config();
import { Express } from "express";
import Redis from "ioredis";

module.exports = async function setupRedis(app: Express): Promise<void> {
	const { env, logger } = app.z;
	try {
		const redisConfig = env.redis.connection
			? { uri: env.redis.connection }
			: {
					port: env.redis.port,
					host: env.redis.host,
					username: env.redis.username,
					password: env.redis.password,
					db: env.redis.database,
			  };

		app.z.redis = new Redis(redisConfig);
		await app.z.redis.ping();
		logger.info("Redis connected successfully");
	} catch (error) {
		logger.error("Error connecting to Redis:", error);
	}
}
