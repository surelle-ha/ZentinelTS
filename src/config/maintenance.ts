require("dotenv").config();
import { Express, Request, Response, NextFunction } from "express";

export default async function setupMaintenance(app: Express): Promise<void> {
	app.use((req: Request, res: Response, next: NextFunction) => {
		const maintenanceMode =
			(process.env.MAINTENANCE_MODE || "false").toLowerCase() === "true";
		if (maintenanceMode) {
			if (req.headers["maintenance-key"] === process.env.MAINTENANCE_KEY) {
				return next();
			}
			return res.status(503).json({
				success: false,
				message:
					"The application is currently under maintenance. Please try again later.",
			});
		}
		next();
	});
}
