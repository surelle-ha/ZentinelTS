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
module.exports = function (app) {
    const { User, Role, Permission } = app.z.models;
    const Middleware = {
        name: "SequelizeGuard",
        authorize: (requiredPermission) => (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.user.id) {
                    return res.status(403).send({
                        message: "User ID not found in request. User may not be authenticated.",
                    });
                }
                const user = yield User.findByPk(req.user.id, {
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
                        .send({ message: "Access denied. No role found." });
                }
                const permissions = user.Role.Permissions.map((permission) => permission.name);
                if (permissions.includes(requiredPermission)) {
                    next();
                }
                else {
                    return res.status(403).send({
                        message: "Access denied. You do not have the required permission.",
                    });
                }
            }
            catch (error) {
                console.error("Permission Check Error:", error);
                res.status(500).send({ message: "Internal Server Error" });
            }
        }),
    };
    return Middleware;
};
