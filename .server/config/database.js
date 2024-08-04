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
exports.default = setupDatabase;
const sequelize_1 = require("sequelize");
const dbName = process.env.DATABASE_NAME || "zentinel_db";
const dbUser = process.env.DATABASE_USER || "root";
const dbPass = process.env.DATABASE_PASS || "";
const dbHost = process.env.DATABASE_HOST || "localhost";
const dbPort = Number(process.env.DATABASE_PORT) || 3306;
const dbType = process.env.DATABASE_TYPE || "mysql";
function setupDatabase(app) {
    return __awaiter(this, void 0, void 0, function* () {
        app.z.sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPass, {
            host: dbHost,
            port: dbPort,
            dialect: dbType,
            logging: false,
        });
        try {
            yield app.z.sequelize.authenticate();
            app.z.logger.info(`Database connected successfully`);
        }
        catch (error) {
            app.z.logger.error(`[SQL] Connection Error`, error);
        }
    });
}
