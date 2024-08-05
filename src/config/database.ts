import { Express } from "express";
import { Sequelize } from "sequelize";

const dbName: string = process.env.DATABASE_NAME || "zentinel_db";
const dbUser: string = process.env.DATABASE_USER || "root";
const dbPass: string = process.env.DATABASE_PASS || "";
const dbHost: string = process.env.DATABASE_HOST || "localhost";
const dbPort: number = Number(process.env.DATABASE_PORT) || 3306;
const dbType: string = process.env.DATABASE_TYPE || "mysql";

export default async function setupDatabase(app: Express): Promise<void> {
	app.z.sequelize = new Sequelize(dbName, dbUser, dbPass, {
		host: dbHost,
		port: dbPort,
		dialect: dbType as "mysql" | "postgres" | "sqlite" | "mssql",
		logging: false,
	});
	try {
		await app.z.sequelize.authenticate();
		app.z.logger.info(`Database connected successfully`);
	} catch (error) {
		app.z.logger.error(`[SQL] Connection Error`, error);
	}
}
