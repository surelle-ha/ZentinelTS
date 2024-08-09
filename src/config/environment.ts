require("dotenv").config();
import { Express } from "express";

module.exports= async function setupEnvironment(app: Express): Promise<void> {
	app.z.env = process.env;
}
