require('dotenv').config()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { Express, Response, Request } from "express";

const bcryptRounds: number = Number(process.env.BCRYPT_ROUNDS);

module.exports = function (app: Express) {

	const { User, Session } = app.z.models;

	const Controller = {
		name: "Auth",
		loginUser: async (req: Request, res: Response) => {
			try {
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
					process.env.APP_KEY || "secret",
					{ expiresIn: "1h" }
				);

				await Session.destroy({ where: { userId: user.id } });

				const newSession = await Session.create({
					userId: user.id,
					token,
					expiresAt: new Date(Date.now() + 3600000), // 1 hour from now
				});

				return res.status(200).json({
					status: "success",
					message: "Successfully Authenticated.",
					userData: { user, token },
				});
			} catch (error) {
				console.error(error);
				return res
					.status(500)
					.send({ status: "error", message: (error as Error).message });
			}
		},
		registerUser: async (req: Request, res: Response) => {
			try {
				// const errors = validationResult(req);
				// if (!errors.isEmpty()) {
				// 	return res.status(400).json({ status: "error", message: errors.array() });
				// }

				const existingUser = await User.findOne({
					where: { email: req.body.email },
				});
				if (existingUser) {
					return res
						.status(400)
						.send({ status: "error", message: "Email already registered" });
				}

				bcrypt.hash(
					req.body.password,
					bcryptRounds,
					async (err: Error | undefined, hashedPassword: string) => {
						if (err) {
							return res
								.status(500)
								.send({
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
						res
							.status(201)
							.send({
								status: "success",
								message: "Successfully registered your account.",
								userData: result,
							});
					}
				);
			} catch (error) {
				console.error(error);
				return res
					.status(500)
					.send({ status: "error", message: (error as Error).message });
			}
		},
		logoutUser: async (req: Request, res: Response) => {
			try {
				const authHeader = req.headers.authorization;
				if (!authHeader) {
					return res
						.status(401)
						.send({ message: "Authorization header missing" });
				}
				const token = authHeader.split(" ")[1];
				const session = await Session.findOne({ where: { token } });
				if (session) {
					await Session.destroy({ where: { id: session.id } });
					res.status(200).send({ message: "Logged out successfully" });
				} else {
					res.status(404).send({ message: "Session not found" });
				}
			} catch (error) {
				console.error(error);
				res
					.status(500)
					.send({ message: "Server error", error: (error as Error).message });
			}
		},
	};
	return Controller;
};
