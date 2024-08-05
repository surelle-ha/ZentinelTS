require('dotenv').config()
const bcrypt = require("bcrypt");
import { Express, Request, Response } from "express";

const bcryptRounds: number = Number(process.env.BCRYPT_ROUNDS);

module.exports = (app: Express) => {

	const { User, Role } = app.z.models;
	const { NotFoundError } = app.z.exceptions.Common;
	
	const Controller: object = {
		name: "User",
		createUser: async (req: Request, res: Response) => {
			try {
				const hashedPassword = await bcrypt.hash(req.body.password, bcryptRounds);
				const result = await User.create({
					...req.body,
					role_id: 1,
					email_verified: true,
					status: "Active",
					password: hashedPassword,
				});
				res.status(201).send({ message: "Account created", userData: result });
			} catch (err: any) {
				res.status(500).send({ error: "Server Error", message: err.message });
			}
		},
		getUser: async (req: Request, res: Response) => {
			try {
				const user = await User.findByPk(req.params.user_id, {
					include: [{ model: Role, as: "Role" }],
				});
				if (!user) {
					throw new NotFoundError("User not found");
				}
				const userData = user.get({ plain: true });
				userData.role = userData.Role;
				delete userData.Role;
				res.status(200).send(userData);
			} catch (err: any) {
				if (err instanceof NotFoundError) {
					res.status(404).send({ message: err.message });
				} else {
					res.status(500).send({ error: "Server Error", message: err.message });
				}
			}
		},
		getAllUsers: async (req: Request, res: Response) => {
			try {
				const users = await User.findAll();
				res.status(200).send(users);
			} catch (err: any) {
				res.status(500).send({ error: "Server Error", message: err.message });
			}
		},
		updateUser: async (req: Request, res: Response) => {
			try {
				const updated = await User.update(req.body, {
					where: { id: req.params.user_id },
					returning: true,
					plain: true,
				});
				if (!updated) {
					return res.status(404).send({ message: "User not found" });
				}
				res.status(200).send({ message: "User updated" });
			} catch (err: any) {
				res.status(500).send({ error: "Server Error", message: err.message });
			}
		},
		deleteUser: async (req: Request, res: Response) => {
			try {
				const deleted = await User.destroy({
					where: { id: req.params.user_id },
				});
				if (!deleted) {
					return res.status(404).send({ message: "User not found" });
				}
				res.status(200).send({ message: "User deleted" });
			} catch (err: any) {
				res.status(500).send({ error: "Server Error", message: err.message });
			}
		},
		deleteAllUsers: async (req: Request, res: Response) => {
			try {
				await User.destroy({ where: {} });
				res.status(200).send({ message: "All users deleted" });
			} catch (err: any) {
				res.status(500).send({ error: "Server Error", message: err.message });
			}
		},
	};
	return Controller;
};
