import { Express } from "express";
const NodeCache = require("node-cache");

module.exports = async function setupCache(app: Express): Promise<void> {
	const { env, logger } = app.z;

	logger.info("Cache connected successfully");
	app.z.cache = new NodeCache({
		stdTTL: 0,
		checkperiod: 600,
		useClones: true,
		deleteOnExpire: true,
		enableLegacyCallbacks: false,
		maxKeys: -1
	});
};
