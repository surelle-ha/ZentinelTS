import { Express } from "express";
import { readdir } from "fs/promises";
import { join } from "path";

const API_PREFIX = "/api";
const WEB_PREFIX = "";

async function loadRoutes(
	app: Express,
	basePath: string,
	prefix: string
): Promise<void> {
	const entries = await readdir(basePath, { withFileTypes: true });
	for (const entry of entries) {
		if (entry.isDirectory()) {
			await loadRoutes(
				app,
				join(basePath, entry.name),
				`${prefix}/${entry.name}`
			);
		} else if (
			entry.isFile() &&
			(entry.name.endsWith(".Route.ts") || entry.name.endsWith(".Route.js"))
		) {
			const routeModule = await import(join(basePath, entry.name));
			app.use(prefix, routeModule.default(app));
		}
	}
}

export default async function bootstrapRoutes(app: Express): Promise<void> {
	// Load API routes
	const apiRoutesPath = join(__dirname, "../app/routes/api");
	await loadRoutes(app, apiRoutesPath, API_PREFIX);

	// Load Web routes
	const webRoutesPath = join(__dirname, "../app/routes/web");
	await loadRoutes(app, webRoutesPath, WEB_PREFIX);
}
