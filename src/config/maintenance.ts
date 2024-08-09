import { Express, Request, Response, NextFunction } from "express";

module.exports = async function setupMaintenance(app: Express): Promise<void> {
	const { env } = app.z;
	app.use((req: Request, res: Response, next: NextFunction) => {
		const maintenanceMode =
			(env.MAINTENANCE_MODE || "false").toLowerCase() === "true";
		if (maintenanceMode) {
			if (req.headers["maintenance-key"] === env.MAINTENANCE_KEY) {
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
