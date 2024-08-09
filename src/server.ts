const { app } = require("./config/app");
const clear = require("clear-screen");
const figlet = require("figlet");
const chalk = require("chalk");
const os = require("os");

const { env, server, logger } = app.z;

const appName = env.APP_NAME || "DefaultAppName";
const appPort = env.APP_PORT || "3000";
const appEnv = env.APP_ENV || "development";
const appBase = env.APP_BASE || "http://localhost";

server.listen(appPort, () => {
	clear();
	console.log(
		chalk.blue(
			figlet.textSync(appName, {
				font: "Ogre",
				horizontalLayout: "full",
				verticalLayout: "default",
				width: 80,
				whitespaceBreak: true,
			})
		)
	);
	console.log(
		chalk.blue(
			`${appName.toUpperCase()} SERVER RUNNING IN ${appEnv.toUpperCase()} ENVIRONMENT`
		)
	);
	console.log(`\t\n\t- Local:\t${chalk.green(appBase + ":" + appPort)}`);

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

	console.log(chalk.blue(`\nServer Logs:`));
	logger.info(chalk.yellow(`${appName} has started.`));
});
