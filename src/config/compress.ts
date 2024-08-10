import { Express, Request, Response } from "express";
const compression = require("compression");

module.exports = async function setupCompress(app: Express): Promise<void> {
	app.use(
		compression({
			level: 6,
			threshold: 0,
			filter: (req: Request, res: Response) => {
				if (!req.headers["x-no-compression"]) {
					return compression.filter(req, res);
				}
				return false;
			},
		})
	);
};
