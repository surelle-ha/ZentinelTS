import { Express } from "express";
import { readdir, promises as fsPromises } from "fs";
import { join, extname } from "path";

// Asynchronous utility function to handle async errors
function asyncHandler(fn: Function) {
    return function (req: any, res: any, next: any) {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}

const loadControllers = async (app: Express) => {
    app.z = app.z || {};
    app.z.controllers = {};
    const controllersPath = join(__dirname, "../app/controllers");
    
    const files = await fsPromises.readdir(controllersPath);
    for (const file of files) {
        if (file !== "__i.js" && extname(file) === ".js") {
            const controllerModule = await import(join(controllersPath, file));
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
};

const loadModels = async (app: Express) => {
    app.z = app.z || {};
    app.z.models = app.z.models || {};
    const modelsPath = join(__dirname, "../app/models");
    
    const files = await fsPromises.readdir(modelsPath);
    for (const file of files) {
        if (file !== "__i.js" && extname(file) === ".js") {
            const modelPath = join(modelsPath, file);
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
};

const loadRoutes = async (
    app: Express,
    basePath: string,
    prefix: string
): Promise<void> => {
    const entries = await fsPromises.readdir(basePath, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.isDirectory()) {
            await loadRoutes(
                app,
                join(basePath, entry.name),
                `${prefix}/${entry.name}`
            );
        } else if (
            entry.isFile() &&
            (entry.name.endsWith(".Route.ts") || entry.name.endsWith(".Route.js"))
        ) {
            const routeModule = await import(join(basePath, entry.name));
            app.use(prefix, routeModule.default(app));
        }
    }
};

const loadMiddlewares = async (app: Express) => {
    app.z = app.z || {};
    app.z.middlewares = {};
    const middlewaresPath = join(__dirname, "../app/middlewares");
    
    const files = await fsPromises.readdir(middlewaresPath);
    for (const file of files) {
        if (file !== "__i.js" && extname(file) === ".js") {
            const middlewarePath = join(middlewaresPath, file);
            const middleware = require(middlewarePath)(app);
            app.z.middlewares[middleware.name] = middleware;
        }
    }
};

const loadExceptions = async (app: Express) => {
    app.z = app.z || {};
    app.z.exceptions = {};
    const exceptionsPath = join(__dirname, "../app/exceptions");
    
    const files = await fsPromises.readdir(exceptionsPath);
    for (const file of files) {
        if (file !== "__i.js" && extname(file) === ".js") {
            const exceptionPath = join(exceptionsPath, file);
            const exception = require(exceptionPath)(app);
            app.z.exceptions[exception.name] = exception;
        }
    }
};

module.exports = async function bootstrapRoutes(app: Express): Promise<void> {
	await loadExceptions(app);
    await loadModels(app);
	await loadMiddlewares(app);
    await loadControllers(app);

    // Load API routes
    const apiRoutesPath = join(__dirname, "../app/routes/api");
    await loadRoutes(app, apiRoutesPath, "/api");

    // Load Web routes
    const webRoutesPath = join(__dirname, "../app/routes/web");
    await loadRoutes(app, webRoutesPath, "");
}
