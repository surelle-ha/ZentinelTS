import pino from "pino";
import pinoPretty from "pino-pretty";
import expressPino from "express-pino-logger";
import fs from "fs";
import path from "path";
import { Express, Response, Request, NextFunction } from "express";

const logDir = path.join(__dirname, "../storage/logs");

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

const prettyStream = pinoPretty({
    colorize: true,
    colorizeObjects: true,
    singleLine: true,
    translateTime: "SYS:standard",
    ignore: "pid,hostname,req,res",
    messageFormat: `{pid}::> {msg}`,
});

const logger: any = pino(
    {
        level: "info",
    },
    pino.multistream([
        { stream: prettyStream, level: "info" },
        { stream: pino.destination(path.join(logDir, "info.log")), level: "info" },
        { stream: pino.destination(path.join(logDir, "warn.log")), level: "warn" },
        { stream: pino.destination(path.join(logDir, "error.log")), level: "error" },
        { stream: pino.destination(path.join(logDir, "fatal.log")), level: "fatal" },
    ])
);

module.exports = function setupLogger(app: Express): void {
    app.z.logger = logger;
    app.use(expressPino({ logger }));
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        logger.error(err.message);
        res.status(500).send("Something went wrong!");
    });
}
