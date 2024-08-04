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
exports.default = bootstrapRoutes;
const fs_1 = require("fs");
const path_1 = require("path");
// Asynchronous utility function to handle async errors
function asyncHandler(fn) {
    return function (req, res, next) {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}
const loadControllers = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.z = app.z || {};
    app.z.controllers = {};
    const controllersPath = (0, path_1.join)(__dirname, "../app/controllers");
    const files = yield fs_1.promises.readdir(controllersPath);
    for (const file of files) {
        if (file !== "__i.js" && (0, path_1.extname)(file) === ".js") {
            const controllerModule = yield Promise.resolve(`${(0, path_1.join)(controllersPath, file)}`).then(s => __importStar(require(s)));
            const controller = controllerModule.default(app);
            for (const [methodName, method] of Object.entries(controller)) {
                if (typeof method === 'function' && method.constructor.name === 'AsyncFunction') {
                    controller[methodName] = asyncHandler(method);
                }
            }
            if (controller.name) {
                app.z.controllers[controller.name] = controller;
            }
        }
    }
});
const loadModels = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.z = app.z || {};
    app.z.models = app.z.models || {};
    const modelsPath = (0, path_1.join)(__dirname, "../app/models");
    const files = yield fs_1.promises.readdir(modelsPath);
    for (const file of files) {
        if (file !== "__i.js" && (0, path_1.extname)(file) === ".js") {
            const modelPath = (0, path_1.join)(modelsPath, file);
            if (file.endsWith(".Sequelize.js") || file.endsWith(".Model.js")) {
                const model = require(modelPath)(app.z.sequelize);
                app.z.models[model.name] = model;
            }
        }
    }
    Object.keys(app.z.models).forEach((modelName) => {
        if ("associate" in app.z.models[modelName]) {
            app.z.models[modelName].associate(app.z.models);
        }
    });
});
const loadRoutes = (app, basePath, prefix) => __awaiter(void 0, void 0, void 0, function* () {
    const entries = yield fs_1.promises.readdir(basePath, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.isDirectory()) {
            yield loadRoutes(app, (0, path_1.join)(basePath, entry.name), `${prefix}/${entry.name}`);
        }
        else if (entry.isFile() &&
            (entry.name.endsWith(".Route.ts") || entry.name.endsWith(".Route.js"))) {
            const routeModule = yield Promise.resolve(`${(0, path_1.join)(basePath, entry.name)}`).then(s => __importStar(require(s)));
            app.use(prefix, routeModule.default(app));
        }
    }
});
const loadMiddlewares = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.z = app.z || {};
    app.z.middlewares = {};
    const middlewaresPath = (0, path_1.join)(__dirname, "../app/middlewares");
    const files = yield fs_1.promises.readdir(middlewaresPath);
    for (const file of files) {
        if (file !== "__i.js" && (0, path_1.extname)(file) === ".js") {
            const middlewarePath = (0, path_1.join)(middlewaresPath, file);
            const middleware = require(middlewarePath)(app);
            app.z.middlewares[middleware.name] = middleware;
        }
    }
});
const loadExceptions = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.z = app.z || {};
    app.z.exceptions = {};
    const exceptionsPath = (0, path_1.join)(__dirname, "../app/exceptions");
    const files = yield fs_1.promises.readdir(exceptionsPath);
    for (const file of files) {
        if (file !== "__i.js" && (0, path_1.extname)(file) === ".js") {
            const exceptionPath = (0, path_1.join)(exceptionsPath, file);
            const exception = require(exceptionPath)(app);
            app.z.exceptions[exception.name] = exception;
        }
    }
});
function bootstrapRoutes(app) {
    return __awaiter(this, void 0, void 0, function* () {
        yield loadExceptions(app);
        yield loadModels(app);
        yield loadMiddlewares(app);
        yield loadControllers(app);
        // Load API routes
        const apiRoutesPath = (0, path_1.join)(__dirname, "../app/routes/api");
        yield loadRoutes(app, apiRoutesPath, "/api");
        // Load Web routes
        const webRoutesPath = (0, path_1.join)(__dirname, "../app/routes/web");
        yield loadRoutes(app, webRoutesPath, "");
    });
}
