"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
module.exports = (app) => {
    const router = (0, express_1.Router)();
    const { Auth } = app.z.controllers;
    const { Authenticate } = app.z.middlewares;
    // const { Auth } = app.z.validations;
    router.post("/auth/login", 
    // [AuthValidation.check.login],
    Auth.loginUser);
    router.post("/auth/register", 
    // [AuthValidation.check.register],
    Auth.registerUser);
    router.post("/auth/logout", 
    // [AuthenticateMiddleware.authenticate],
    Auth.logoutUser);
    return router;
};
