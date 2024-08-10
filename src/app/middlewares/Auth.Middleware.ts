import { Express, Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

module.exports = function (app: Express) {

	const { User, Session } = app.z.models;
	
	const Middleware = {
		name: "Auth",
		authenticate: async (req: Request, res: Response, next: NextFunction) => {
			try {
				const token = req.headers.authorization?.split(" ")[1];
				if (!token) {
					return res
						.status(401)
						.json({ message: "Authentication Failed: No token provided." });
				}

				jwt.verify(
					token,
					process.env.APP_KEY,
					async (err: any, decoded: any) => {
						if (err) {
							console.error("JWT Verification Error:", err);
							return res.status(401).json({
								message: "Authentication Failed: Invalid token.",
								err: err.message,
							});
						}

						const session = await Session.findOne({
							where: {
								token: token,
								userId: decoded.userId,
							},
						});

						if (!session) {
							return res
								.status(401)
								.json({ message: "No valid session found." });
						}

						if (session.expiresAt < new Date()) {
							await Session.destroy({
								where: { token: token, userId: decoded.userId },
							});
							return res.status(401).json({ message: "Token expired." });
						}

						req.user = await User.findOne({ where: { id: decoded.userId } });

						next();
					}
				);
			} catch (error) {
				console.error("Authentication middleware error:", error);
				return res
					.status(500)
					.json({ message: "Server error during authentication." });
			}
		},
	};

	return Middleware;
};
