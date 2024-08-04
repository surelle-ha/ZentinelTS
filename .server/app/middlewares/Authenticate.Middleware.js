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
const jwt = require("jsonwebtoken");
module.exports = function (app) {
    const { User, Session } = app.z.models;
    const Middleware = {
        name: "Authenticate",
        authenticate: (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
                if (!token) {
                    return res
                        .status(401)
                        .json({ message: "Authentication Failed: No token provided." });
                }
                console.log(process.env.APP_KEY);
                jwt.verify(token, process.env.APP_KEY, (err, decoded) => __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        console.error("JWT Verification Error:", err);
                        return res
                            .status(401)
                            .json({
                            message: "Authentication Failed: Invalid token.",
                            err: err.message,
                        });
                    }
                    const session = yield Session.findOne({
                        where: {
                            token: token,
                            userId: decoded.userId,
                        },
                    });
                    if (!session) {
                        return res.status(401).json({ message: "No valid session found." });
                    }
                    if (session.expiresAt < new Date()) {
                        yield Session.destroy({
                            where: { token: token, userId: decoded.userId },
                        });
                        return res.status(401).json({ message: "Token expired." });
                    }
                    req.user = yield User.findOne({ where: { id: decoded.userId } });
                    next();
                }));
            }
            catch (error) {
                console.error("Authentication middleware error:", error);
                return res
                    .status(500)
                    .json({ message: "Server error during authentication." });
            }
        })
    };
    return Middleware;
};
