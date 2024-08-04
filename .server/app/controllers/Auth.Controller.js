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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const saltRounds = 10;
module.exports = function (app) {
    const { User, Session } = app.z.models;
    const Controller = {
        name: "Auth",
        loginUser: (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield User.unscoped().findOne({ where: { email } });
                if (!user) {
                    return res.status(401).json({ status: "error", message: "Invalid Email or Password" });
                }
                const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
                if (!isPasswordValid) {
                    return res.status(401).json({ status: "error", message: "Invalid Email or Password" });
                }
                const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || 'secret', { expiresIn: "1h" });
                yield Session.destroy({ where: { userId: user.id } });
                const newSession = yield Session.create({
                    userId: user.id,
                    token,
                    expiresAt: new Date(Date.now() + 3600000), // 1 hour from now
                });
                return res.status(200).json({
                    status: "success",
                    message: "Successfully Authenticated.",
                    userData: { user, token },
                });
            }
            catch (error) {
                console.error(error);
                return res.status(500).send({ status: "error", message: error.message });
            }
        }),
        registerUser: (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                // const errors = validationResult(req);
                // if (!errors.isEmpty()) {
                // 	return res.status(400).json({ status: "error", message: errors.array() });
                // }
                const existingUser = yield User.findOne({ where: { email: req.body.email } });
                if (existingUser) {
                    return res.status(400).send({ status: "error", message: "Email already registered" });
                }
                bcrypt_1.default.hash(req.body.password, saltRounds, (err, hashedPassword) => __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        return res.status(500).send({ status: "error", message: "Error hashing password", error: err.message });
                    }
                    const userData = Object.assign(Object.assign({}, req.body), { role_id: 1, email_verified: true, status: "Active", password: hashedPassword });
                    const result = yield User.create(userData);
                    res.status(201).send({ status: "success", message: "Successfully registered your account.", userData: result });
                }));
            }
            catch (error) {
                console.error(error);
                return res.status(500).send({ status: "error", message: error.message });
            }
        }),
        logoutUser: (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authHeader = req.headers.authorization;
                if (!authHeader) {
                    return res.status(401).send({ message: "Authorization header missing" });
                }
                const token = authHeader.split(" ")[1];
                const session = yield Session.findOne({ where: { token } });
                if (session) {
                    yield Session.destroy({ where: { id: session.id } });
                    res.status(200).send({ message: "Logged out successfully" });
                }
                else {
                    res.status(404).send({ message: "Session not found" });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send({ message: "Server error", error: error.message });
            }
        }),
    };
    return Controller;
};
