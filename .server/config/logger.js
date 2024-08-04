"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setupLogger;
const pino_1 = __importDefault(require("pino"));
const pino_pretty_1 = __importDefault(require("pino-pretty"));
const express_pino_logger_1 = __importDefault(require("express-pino-logger"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const logDir = path_1.default.join(__dirname, "../storage/logs");
if (!fs_1.default.existsSync(logDir)) {
    fs_1.default.mkdirSync(logDir, { recursive: true });
}
const prettyStream = (0, pino_pretty_1.default)({
    colorize: true,
    colorizeObjects: true,
    singleLine: true,
    translateTime: "SYS:standard",
    ignore: "pid,hostname,req,res",
    messageFormat: `{pid}::> {msg}`,
});
const logger = (0, pino_1.default)({
    level: "info",
}, pino_1.default.multistream([
    { stream: prettyStream, level: "info" },
    { stream: pino_1.default.destination(path_1.default.join(logDir, "info.log")), level: "info" },
    { stream: pino_1.default.destination(path_1.default.join(logDir, "warn.log")), level: "warn" },
    { stream: pino_1.default.destination(path_1.default.join(logDir, "error.log")), level: "error" },
    { stream: pino_1.default.destination(path_1.default.join(logDir, "fatal.log")), level: "fatal" },
]));
function setupLogger(app) {
    app.z.logger = logger;
    app.use((0, express_pino_logger_1.default)({ logger }));
    app.use((err, req, res, next) => {
        logger.error(err.message);
        res.status(500).send("Something went wrong!");
    });
}
