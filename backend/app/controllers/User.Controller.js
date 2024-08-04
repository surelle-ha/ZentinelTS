"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const saltRounds = 10;
module.exports = (app) => {
    const { User, Role } = app.z.models;
    const { NotFoundError } = app.z.exceptions.Common;
    const Controller = {
        name: "User",
        createUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const hashedPassword = yield bcrypt.hash(req.body.password, saltRounds);
                const result = yield User.create(Object.assign(Object.assign({}, req.body), { role_id: 1, email_verified: true, status: "Active", password: hashedPassword }));
                res.status(201).send({ message: "Account created", userData: result });
            }
            catch (err) {
                res.status(500).send({ error: "Server Error", message: err.message });
            }
        }),
        getUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const user = yield User.findByPk(req.params.user_id, {
                    include: [{ model: Role, as: "Role" }],
                });
                if (!user) {
                    throw new NotFoundError("User not found");
                }
                const userData = user.get({ plain: true });
                userData.role = userData.Role;
                delete userData.Role;
                res.status(200).send(userData);
            }
            catch (err) {
                if (err instanceof NotFoundError) {
                    res.status(404).send({ message: err.message });
                }
                else {
                    res.status(500).send({ error: "Server Error", message: err.message });
                }
            }
        }),
        getAllUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const users = yield User.findAll();
                res.status(200).send(users);
            }
            catch (err) {
                res.status(500).send({ error: "Server Error", message: err.message });
            }
        }),
        updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const updated = yield User.update(req.body, {
                    where: { id: req.params.user_id },
                    returning: true,
                    plain: true,
                });
                if (!updated) {
                    return res.status(404).send({ message: "User not found" });
                }
                res.status(200).send({ message: "User updated" });
            }
            catch (err) {
                res.status(500).send({ error: "Server Error", message: err.message });
            }
        }),
        deleteUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const deleted = yield User.destroy({
                    where: { id: req.params.user_id },
                });
                if (!deleted) {
                    return res.status(404).send({ message: "User not found" });
                }
                res.status(200).send({ message: "User deleted" });
            }
            catch (err) {
                res.status(500).send({ error: "Server Error", message: err.message });
            }
        }),
        deleteAllUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield User.destroy({ where: {} });
                res.status(200).send({ message: "All users deleted" });
            }
            catch (err) {
                res.status(500).send({ error: "Server Error", message: err.message });
            }
        }),
    };
    return Controller;
};
