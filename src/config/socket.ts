import { Express } from "express";
const { createServer } = require("http");
const { Server } = require("socket.io");

module.exports = async function setupSocket(app: Express) {
	app.z.server = createServer(app);
	app.z.socket = new Server(app.z.server);

	const { logger, socket: io } = app.z;

	io.on("connection", (socket: any) => {
		logger.info(`User Connected: UC: ${io.engine.clientsCount}`);
		socket.emit("testEvent", "Welcome to the Socket.io server!");
		socket.on("testEvent", (data: string) => {
			logger.info(`Message from client: ${data}`);
			socket.emit("testEvent", `Server received your message: ${data}`);
		});

		io.on("disconnect", () => {
			logger.info(`User Disconnected. UC: ${socket.engine.clientsCount}`);
		});
	});
};
