import { Express } from "express";
import { Sequelize } from "sequelize";

module.exports = async function setupDatabase(app: Express): Promise<void> {
	const { env } = app.z;
	app.z.sequelize = new Sequelize(env.DATABASE_NAME || "zentinel_db", env.DATABASE_USER || "root", env.DATABASE_PASS || "", {
		host: env.DATABASE_HOST || "localhost",
		port: Number(env.DATABASE_PORT) || 3306,
		dialect: (env.DATABASE_TYPE || "mysql") as "mysql" | "postgres" | "sqlite" | "mssql",
		logging: false,
	});
	try {
		await app.z.sequelize.authenticate();
		app.z.logger.info(`Database connected successfully`);
	} catch (error) {
		app.z.logger.error(`[SQL] Connection Error`, error);
	}
}
