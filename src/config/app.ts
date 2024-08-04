import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app: Express = express();
app.z = { sequelize: {}, logger: {}, ratelimit: {} };

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public"));

app.use(express.static(path.join(__dirname, "../public")));

import("./monitor").then(({ default: setupMonitor }) => setupMonitor(app));
import("./prometheus").then(({ default: setupPrometheus }) =>
	setupPrometheus(app)
);
import("./logger").then(({ default: setupLogger }) => setupLogger(app));
import("./database").then(({ default: setupDatabase }) => setupDatabase(app));
import("./helmet").then(({ default: setupHelmet }) => setupHelmet(app));
import("./cors").then(({ default: setupCors }) => setupCors(app));
import("./ratelimit").then(({ default: setupRatelimit }) =>
	setupRatelimit(app)
);


import("./bootstrap").then(({ default: setupBootstrap }) =>
	setupBootstrap(app)
);
import("./exception").then(({ default: setupException }) =>
	setupException(app)
);

export { app };
