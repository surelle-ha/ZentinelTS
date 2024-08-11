require("dotenv").config();
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
                await req.app.z.cache.del("AllUsers");
                res.status(201).json({ message: "Account created", userData: result });
            } catch (err: any) {
                res.status(500).json({ error: "Server Error", message: err.message });
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
                res.status(200).json(userData);
            } catch (err: any) {
                if (err instanceof NotFoundError) {
                    res.status(404).json({ message: err.message });
                } else {
                    res.status(500).json({ error: "Server Error", message: err.message });
                }
            }
        },
        getAllUsers: async (req: Request, res: Response) => {
            try {
                const cachedUsers = await req.app.z.cache.get("AllUsers");
                if (cachedUsers) {
                    console.log("cache hit");
                    res.status(200).json(JSON.parse(cachedUsers));
                    return;
                }
                console.log("cache miss");
                const users = await User.findAll();
                await req.app.z.cache.set("AllUsers", JSON.stringify(users), 3600); // Set expiration time in seconds
                res.status(200).json(users);
            } catch (err: any) {
                res.status(500).json({ error: "Server Error", message: err.message });
            }
        },
        updateUser: async (req: Request, res: Response) => {
            try {
                const [affectedRows, updatedUsers] = await User.update(req.body, {
                    where: { id: req.params.user_id },
                    returning: true,
                    plain: true,
                });
                if (affectedRows === 0) {
                    return res.status(404).json({ message: "User not found" });
                }
                await req.app.z.cache.del("AllUsers");
                res.status(200).json({ message: "User updated", userData: updatedUsers[0] });
            } catch (err: any) {
                res.status(500).json({ error: "Server Error", message: err.message });
            }
        },
        deleteUser: async (req: Request, res: Response) => {
            try {
                const deleted = await User.destroy({
                    where: { id: req.params.user_id },
                });
                if (deleted === 0) {
                    return res.status(404).json({ message: "User not found" });
                }
                await req.app.z.cache.del("AllUsers");
                res.status(200).json({ message: "User deleted" });
            } catch (err: any) {
                res.status(500).json({ error: "Server Error", message: err.message });
            }
        },
        deleteAllUsers: async (req: Request, res: Response) => {
            try {
                await User.destroy({ where: {} });
                await req.app.z.cache.del("AllUsers");
                res.status(200).json({ message: "All users deleted" });
            } catch (err: any) {
                res.status(500).json({ error: "Server Error", message: err.message });
            }
        },
    };

    return Controller;
};
