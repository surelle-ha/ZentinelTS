import express, { Express } from "express";
const path = require("path");
const schedule = require("node-schedule");

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
	redis: {},
	socket: {},
};

// Get Config
require("../../zentinel.config").init(app);
const { config } = app.z;

// View Set
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public"));

// Configs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

if (config.include_response_time) app.use(require("response-time")());
if (config.sanitize_request) app.use(require("xss-clean")());
if (config.force_https) app.use(require('express-sslify').HTTPS());

require("./logger")(app);
require("./database")(app);
require("./socket")(app);
require("./cache")(app);
require("./storage")(app);
require("./mailer")(app);

if (config.ext_compress) require("./compress")(app);
if (config.ext_prometheus) require("./prometheus")(app);
if (config.ext_redis) require("./redis")(app);
if (config.ext_helmet) require("./helmet")(app);
if (config.ext_cors) require("./cors")(app);
if (config.ext_ratelimit) require("./ratelimit")(app);

require("./maintenance")(app);
require("./bootstrap")(app);
require("./exception")(app);

module.exports = app;
