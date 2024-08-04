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
const express_1 = require("express");
module.exports = function (app) {
    const router = (0, express_1.Router)();
    const { Authenticate, SequelizeGuard } = app.z.middlewares;
    router.post("/webhook/ratelimit/reset", [Authenticate.authenticate], (req, res) => __awaiter(this, void 0, void 0, function* () {
        app.z.ratelimit.resetKey(req.ip);
        res.json({ status: "success", message: "Rate limit is reset!", request_by: req.user.id });
    }));
    return router;
};
