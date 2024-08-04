"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
exports.app = app;
// Initial Initialize
dotenv_1.default.config();
app.z = { sequelize: {}, logger: {}, ratelimit: {} };
// View Set
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "../public"));
// Core Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
// Configs
Promise.resolve().then(() => __importStar(require("./monitor"))).then(({ default: setupMonitor }) => setupMonitor(app));
Promise.resolve().then(() => __importStar(require("./prometheus"))).then(({ default: setupPrometheus }) => setupPrometheus(app));
Promise.resolve().then(() => __importStar(require("./logger"))).then(({ default: setupLogger }) => setupLogger(app));
Promise.resolve().then(() => __importStar(require("./database"))).then(({ default: setupDatabase }) => setupDatabase(app));
Promise.resolve().then(() => __importStar(require("./helmet"))).then(({ default: setupHelmet }) => setupHelmet(app));
Promise.resolve().then(() => __importStar(require("./cors"))).then(({ default: setupCors }) => setupCors(app));
Promise.resolve().then(() => __importStar(require("./ratelimit"))).then(({ default: setupRatelimit }) => setupRatelimit(app));
Promise.resolve().then(() => __importStar(require("./bootstrap"))).then(({ default: setupBootstrap }) => setupBootstrap(app));
Promise.resolve().then(() => __importStar(require("./exception"))).then(({ default: setupException }) => setupException(app));