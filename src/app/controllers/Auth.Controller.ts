const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { Express, Response, Request } from "express";

module.exports = function (app: Express) {
	const { env } = app.z;
	const { User, Session } = app.z.models;

	const bcryptRounds: number = Number(env.auth.bcrypt_rounds);

	const Controller = {
		name: "Auth",
		loginUser: async (req: Request, res: Response) => {
			const { email, password } = req.body;
			const user = await User.unscoped().findOne({ where: { email } });
			if (!user) {
				return res
					.status(401)
					.json({ status: "error", message: "Invalid Email or Password" });
			}

			const isPasswordValid = await bcrypt.compare(password, user.password);
			if (!isPasswordValid) {
				return res
					.status(401)
					.json({ status: "error", message: "Invalid Email or Password" });
			}

			const token = jwt.sign(
				{ userId: user.id, email: user.email },
				env.app.key || "secret",
				{ expiresIn: "24h" }
			);

			await Session.destroy({ where: { userId: user.id } });

			await Session.create({
				userId: user.id,
				token,
				expiresAt: new Date(Date.now() + Number(env.auth.session_lifetime)),
			});

			return res.status(200).json({
				status: "success",
				message: "Successfully Authenticated.",
				userData: { user, token },
			});
		},
		registerUser: async (req: Request, res: Response) => {
			const existingUser = await User.findOne({
				where: { email: req.body.email },
			});
			if (existingUser) {
				return res
					.status(400)
					.json({ status: "error", message: "Email already registered" });
			}

			bcrypt.hash(
				req.body.password,
				bcryptRounds,
				async (err: Error | undefined, hashedPassword: string) => {
					if (err) {
						return res.status(500).json({
							status: "error",
							message: "Error hashing password",
							error: err.message,
						});
					}

					const userData = {
						...req.body,
						role_id: 1,
						email_verified: true,
						status: "Active",
						password: hashedPassword,
					};
					const result = await User.create(userData);
					res.status(201).json({
						status: "success",
						message: "Successfully registered your account.",
						userData: result,
					});
				}
			);
		},
		logoutUser: async (req: Request, res: Response) => {
			const authHeader = req.headers.authorization;
			if (!authHeader) {
				return res
					.status(401)
					.json({ message: "Authorization header missing" });
			}
			const token = authHeader.split(" ")[1];
			const session = await Session.findOne({ where: { token } });
			if (session) {
				await Session.destroy({ where: { id: session.id } });
				res.status(200).json({ message: "Logged out successfully" });
			} else {
				res.status(404).json({ message: "Session not found" });
			}
		},
	};
	return Controller;
};
