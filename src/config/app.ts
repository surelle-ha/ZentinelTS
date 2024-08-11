import express, { Express } from "express";
const responseTime = require("response-time");
const xss = require("xss-clean");
const path = require("path");
var enforce = require("express-sslify");
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

// View Set
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public"));

// Core Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(responseTime());
app.use(xss());
// app.use(enforce.HTTPS());
// schedule.scheduleJob("* * * * * *", function () {
// 	console.log("The answer to life, the universe, and everything!");
// });

// Configs
require("./environment")(app);
require("./logger")(app);
require("./database")(app);
require("./socket")(app);
require("./cache")(app);
require("./storage")(app);
require("./mailer")(app);

if (app.z.config.compress) require("./compress")(app);
if (app.z.config.prometheus) require("./prometheus")(app);
if (app.z.config.redis) require("./redis")(app);
if (app.z.config.helmet) require("./helmet")(app);
if (app.z.config.cors) require("./cors")(app);
if (app.z.config.ratelimit) require("./ratelimit")(app);

require("./maintenance")(app);
require("./bootstrap")(app);
require("./exception")(app);

module.exports = app;
