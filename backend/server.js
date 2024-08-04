"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./config/app");
const figlet_1 = __importDefault(require("figlet"));
const chalk_1 = __importDefault(require("chalk"));
const os_1 = __importDefault(require("os"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const appName = process.env.APP_NAME || "DefaultAppName";
const appPort = process.env.APP_PORT || "3000";
const appEnv = process.env.APP_ENV || "development";
const appBase = process.env.APP_BASE || "http://localhost";
const showRemoteIP = () => {
    const networkInterfaces = os_1.default.networkInterfaces();
    for (const interfaceName in networkInterfaces) {
        const interfaceInfo = networkInterfaces[interfaceName];
        if (interfaceInfo) {
            for (const alias of interfaceInfo) {
                if (alias.family === "IPv4" && !alias.internal) {
                    console.log(`\t- Network:\t${chalk_1.default.green("http://" + alias.address + ":" + appPort)}`);
                }
            }
        }
    }
};
app_1.app.listen(appPort, () => {
    console.log(chalk_1.default.yellow(figlet_1.default.textSync(appName, { horizontalLayout: "full" })));
    console.log(chalk_1.default.yellow(`${appName.toUpperCase()} SERVER RUNNING IN ${appEnv.toUpperCase()} ENVIRONMENT`));
    console.log(`\t\n\t- Local:\t${chalk_1.default.green(appBase + ":" + appPort)}`);
    showRemoteIP();
    console.log(`\nRoutes: `);
    app_1.app._router.stack.forEach(function (r) {
        if (r.route && r.route.path) {
            console.log("~", chalk_1.default.underline(r.route.stack[0].method.toUpperCase() == "POST" ? chalk_1.default.yellow(r.route.stack[0].method.toUpperCase()) :
                r.route.stack[0].method.toUpperCase() == "GET" ? chalk_1.default.green(r.route.stack[0].method.toUpperCase()) :
                    r.route.stack[0].method.toUpperCase() == "PATCH" ? chalk_1.default.magenta(r.route.stack[0].method.toUpperCase()) :
                        r.route.stack[0].method.toUpperCase() == "PUT" ? chalk_1.default.blue(r.route.stack[0].method.toUpperCase()) :
                            r.route.stack[0].method.toUpperCase() == "DELETE" ? chalk_1.default.red(r.route.stack[0].method.toUpperCase()) :
                                chalk_1.default.cyan(r.route.stack[0].method.toUpperCase())), chalk_1.default.underline(r.route.path));
        }
    });
    console.log(`\nServer Logs:\n[System] App has started.`);
});
