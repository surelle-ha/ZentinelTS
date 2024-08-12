const app = require("./config/app");
const clear = require("clear-screen");
const figlet = require("figlet");
const chalk = require("chalk");
const os = require("os");

const { env, server, logger } = app.z;

server.listen(env.app.port, () => {
	// clear();
	console.log(
		chalk.blue(
			figlet.textSync(env.app.name, {
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
			`${env.app.name.toUpperCase()} SERVER RUNNING IN ${env.app.environment.toUpperCase()} ENVIRONMENT`
		)
	);
	console.log(`\t\n\t- Local:\t${chalk.green(env.app.base + ":" + env.app.port)}`);

	const networkInterfaces = os.networkInterfaces();
	for (const interfaceName in networkInterfaces) {
		const interfaceInfo = networkInterfaces[interfaceName];
		if (interfaceInfo) {
			for (const alias of interfaceInfo) {
				if (alias.family === "IPv4" && !alias.internal) {
					console.log(
						`\t- Network:\t${chalk.green(
							"http://" + alias.address + ":" + env.app.port
						)}`
					);
				}
			}
		}
	}

	console.log(chalk.blue(`\nServer Logs:`));
	logger.info(chalk.yellow(`${env.app.name} has started.`));
});
