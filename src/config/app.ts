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

// Get Config
require('../../zentinel.config').init(app);

// View Set
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public"));

// Core Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// Configs
require('./environment')(app);
require('./logger')(app);
require('./database')(app);
require('./socket')(app);
if (app.z.config.prometheus) require('./prometheus')(app);
if (app.z.config.cache) require('./cache')(app);
if (app.z.config.storage) require('./storage')(app);
if (app.z.config.mailer) require('./mailer')(app);
if (app.z.config.helmet) require('./helmet')(app);
if (app.z.config.cors) require('./cors')(app);
if (app.z.config.ratelimit) require('./ratelimit')(app);
require('./maintenance')(app);
require('./bootstrap')(app);
require('./exception')(app);

export { app };
