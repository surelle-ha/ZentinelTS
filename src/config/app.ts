import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";

const app: Express = express();

// Initial Initialize
dotenv.config();
app.z = { sequelize: {}, logger: {}, ratelimit: {}, mailer: {}, storage: {} };

// View Set
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public"));

// Core Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// Configs
import("./prometheus").then(({ default: setupPrometheus }) =>
	setupPrometheus(app)
);
import("./logger").then(({ default: setupLogger }) => setupLogger(app));
import("./storage").then(({ default: setupStorage }) => setupStorage(app));
import("./mailer").then(({ default: setupMailer }) => setupMailer(app));
import("./database").then(({ default: setupDatabase }) => setupDatabase(app));
import("./helmet").then(({ default: setupHelmet }) => setupHelmet(app));
import("./cors").then(({ default: setupCors }) => setupCors(app));
import("./ratelimit").then(({ default: setupRatelimit }) =>
	setupRatelimit(app)
);

import("./maintenance").then(({ default: setupMaintenance }) =>
	setupMaintenance(app)
);
import("./bootstrap").then(({ default: setupBootstrap }) =>
	setupBootstrap(app)
);
import("./exception").then(({ default: setupException }) =>
	setupException(app)
);

export { app };
