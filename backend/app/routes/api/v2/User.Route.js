"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const express_1 = require("express");
function default_1(app) {
    const router = (0, express_1.Router)();
    router.get('/users', (req, res) => {
        res.json("wow its working!");
    });
    return router;
}
