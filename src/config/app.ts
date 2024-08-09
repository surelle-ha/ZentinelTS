import express, { Express } from "express";
import path from "path";

const app: Express = express();

// Initial Initialize
app.z = {
	server: {},
	env: {},
	sequelize: {},
	logger: {},
	ratelimit: {},
	mailer: {},
	storage: {},
	cache: {},
	socket: {}
};

// View Set
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public"));

// Core Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// Configs
require('./environment')(app);
require('./prometheus')(app);
require('./logger')(app);
require('./database')(app);
require('./socket')(app);
if (true) require('./cache')(app);
if (true) require('./storage')(app);
if (true) require('./mailer')(app);
if (true) require('./helmet')(app);
if (true) require('./cors')(app);
if (true) require('./ratelimit')(app);
require('./maintenance')(app);
require('./bootstrap')(app);
require('./exception')(app);

export { app };
