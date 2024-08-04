import { app } from "./config/app";
import figlet from "figlet";
import chalk from "chalk";
import os from "os";
import dotenv from "dotenv";

dotenv.config();

const appName = process.env.APP_NAME || "DefaultAppName";
const appPort = process.env.APP_PORT || "3000";
const appEnv = process.env.APP_ENV || "development";
const appBase = process.env.APP_BASE || "http://localhost";

const showRemoteIP = () => {
	const networkInterfaces = os.networkInterfaces();
	for (const interfaceName in networkInterfaces) {
		const interfaceInfo = networkInterfaces[interfaceName];
		if (interfaceInfo) {
			for (const alias of interfaceInfo) {
				if (alias.family === "IPv4" && !alias.internal) {
					console.log(
						`\t- Network:\t${chalk.green(
							"http://" + alias.address + ":" + appPort
						)}`
					);
				}
			}
		}
	}
};

app.listen(appPort, () => {
	console.log(
		chalk.yellow(figlet.textSync(appName, { horizontalLayout: "full" }))
	);
	console.log(
		chalk.yellow(
			`${appName.toUpperCase()} SERVER RUNNING IN ${appEnv.toUpperCase()} ENVIRONMENT`
		)
	);
	console.log(`\t\n\t- Local:\t${chalk.green(appBase + ":" + appPort)}`);

	showRemoteIP();

	console.log(`\nServer Logs:\n[System] App has started.`);
});
