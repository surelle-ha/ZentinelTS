import { Express, Request, Response, NextFunction } from "express";
module.exports = function (app: Express) {

	const { User, Role, Permission } = app.z.models;
	
	const Middleware = {
		name: "Permission",
		authorize:
			(requiredPermission: string) =>
			async (req: Request, res: Response, next: NextFunction) => {
				try {
					if (!req.user.id) {
						return res.status(403).json({
							message:
								"User ID not found in request. User may not be authenticated.",
						});
					}

					const user = await User.findByPk(req.user.id, {
						include: [
							{
								model: Role,
								as: "Role",
								include: [
									{
										model: Permission,
										as: "Permissions",
									},
								],
							},
						],
					});

					if (!user || !user.Role) {
						return res
							.status(403)
							.json({ message: "Access denied. No role found." });
					}

					const permissions = user.Role.Permissions.map(
						(permission: any) => permission.name
					);
					if (permissions.includes(requiredPermission)) {
						next();
					} else {
						return res.status(403).json({
							message:
								"Access denied. You do not have the required permission.",
						});
					}
				} catch (error) {
					console.error("Permission Check Error:", error);
					res.status(500).json({ message: "Internal Server Error" });
				}
			},
	};
	return Middleware;
};
