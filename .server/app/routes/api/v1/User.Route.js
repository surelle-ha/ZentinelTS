"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
module.exports = (app) => {
    const router = (0, express_1.Router)();
    const { User } = app.z.controllers;
    const { Authenticate, SequelizeGuard } = app.z.middlewares;
    app.use("/api/v1/users", [Authenticate.authenticate]);
    router.post("/users", [SequelizeGuard.authorize("create-user")], User.createUser);
    router.get("/users", [SequelizeGuard.authorize("fetch-user")], User.getAllUsers);
    router.get("/users/:user_id", [SequelizeGuard.authorize("fetch-user")], User.getUser);
    router.patch("/users/:user_id", [SequelizeGuard.authorize("update-user")], User.updateUser);
    router.delete("/users", [SequelizeGuard.authorize("delete-user")], User.deleteAllUsers);
    router.delete("/users/:user_id", [SequelizeGuard.authorize("delete-user")], User.deleteUser);
    return router;
};
