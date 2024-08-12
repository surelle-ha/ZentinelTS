require("dotenv").config();

const zentinel = {
	environment: {
		app: {
			name: process.env.APP_NAME                                  || "Zentinel",

			author: process.env.APP_AUTHOR                              || "",

			version: process.env.APP_VERSION                            || "1.0",

			environment: process.env.APP_ENV                            || "local",

			base: process.env.APP_BASE                                  || "http://localhost",

			port: Number(process.env.APP_PORT)                          || 8800,

			key: process.env.APP_KEY                                    || "eeefff",

			timezone: process.env.APP_TIMEZONE                          || "UTC",
		},

		auth: {
			jwt_secret: process.env.AUTH_JWT_SECRET                     || "eeefff",

			bcrypt_rounds: Number(process.env.AUTH_BCRYPT_ROUNDS)       || 12,

			session_lifetime: Number(process.env.AUTH_SESSION_LIFETIME) || 86400000,
		},

		maintenance: {
			mode: process.env.MAINTENANCE_MODE === "true"               || false,

			key: process.env.MAINTENANCE_KEY                            || "eeefff",
		},

		database: {
			host: process.env.DATABASE_HOST                             || "localhost",

			port: Number(process.env.DATABASE_PORT)                     || 3306,

			name: process.env.DATABASE_NAME                             || "zentinel_db",

			username: process.env.DATABASE_USER                         || "root",

			password: process.env.DATABASE_PASS                         || "",

			type: process.env.DATABASE_TYPE                             || "mysql",
		},

		redis: {
			connection:
				process.env.REDIS_CONNECTION                            || "redis://user:password@127.0.0.1:6379/0",

			host: process.env.REDIS_HOST                                || "localhost",

			port: Number(process.env.REDIS_PORT)                        || 6379,

			username: process.env.REDIS_USERNAME                        || "",

			password: process.env.REDIS_PASSWORD                        || "",

			database: process.env.REDIT_DB                              || "0",
		},

		mailer: {
			host: process.env.MAILER_HOST                               || "smtp.xxx.com",

			port: Number(process.env.MAILER_PORT)                       || 587,

			username: process.env.MAILER_USER                           || "sample@email.com",

			password: process.env.MAILER_PASS                           || "0",

			secure: process.env.MAILER_SECURE === "true"                || false,

			cipher: process.env.MAILER_CIPHER                           || "SSLv3",
		},

		file: {
			upload_destination: process.env.FILE_UPLOAD_DESTINATION     || "./server/storage/",

			custom_name: process.env.FILE_CUSTOM_NAME === "true"        || false,

			name_format: process.env.FILE_NAME_FORMAT                   || "{uniqueid}-{originalname}",

			size_limit: Number(process.env.FILE_SIZE_LIMIT)             || 5000000,

			allowed_file_types: process.env.FILE_ALLOWED_FILE_TYPES     || "image/jpeg,image/png",
		},
	},

	config: {
        /**********************************************
		 * Force HTTPS:
		 * Enforces HTTPS connections on any incoming GET and HEAD requests.
		 **********************************************/
        force_https: false,

        /**********************************************
		 * Sanitize Request:
		 * Avoid Cross Site Scripting Attack by sanitizing the request body.
		 **********************************************/
        sanitize_request: true,

        /**********************************************
		 * Response Time:
		 * Include lapse time as header to every response returned
		 **********************************************/
        include_response_time: true,

		/**********************************************
		 * Compress:
		 * Enables compression to reduce the size of responses and improve performance.
		 **********************************************/
		ext_compress: true,

		/**********************************************
		 * Redis:
		 * Configures the use of Redis for caching and rate limiting to enhance scalability
		 * and prevent abuse while ensuring fair usage.
		 **********************************************/
		ext_redis: false,

		/**********************************************
		 * RATELIMITER:
		 * Activates rate limiting to prevent abuse and ensure fair usage.
		 **********************************************/
		ext_ratelimiter: true,

		/**********************************************
		 * HELMET:
		 * Applies security headers to protect against various web vulnerabilities.
		 **********************************************/
		ext_helmet: true,

		/**********************************************
		 * CORS:
		 * Configures Cross-Origin Resource Sharing settings.
		 **********************************************/
		ext_cors: true,

		/**********************************************
		 * PROMETHEUS:
		 * Exposes metrics for monitoring and
		 * alerting with Prometheus. Once activated,
		 * web app will provide information at /metrics
		 **********************************************/
		ext_prometheus: true,
	},

	/**********************************************
	 * Below are the required configuration for
	 * Sequelize Migration. Only modify this if you know
	 * what you're doing.
	 **********************************************/
	local: {
		username: process.env.DATABASE_USER,

		password: process.env.DATABASE_PASS,

		database: process.env.DATABASE_NAME,

		host: process.env.DATABASE_HOST,

		port: process.env.DATABASE_PORT,

		dialect: process.env.DATABASE_TYPE,
	},
	development: {
		username: process.env.DATABASE_USER,

		password: process.env.DATABASE_PASS,

		database: process.env.DATABASE_NAME,

		host: process.env.DATABASE_HOST,

		port: process.env.DATABASE_PORT,

		dialect: process.env.DATABASE_TYPE,
	},
	production: {
		username: process.env.DATABASE_USER,

		password: process.env.DATABASE_PASS,

		database: process.env.DATABASE_NAME,

		host: process.env.DATABASE_HOST,

		port: process.env.DATABASE_PORT,

		dialect: process.env.DATABASE_TYPE,
	},
};

module.exports = {
	init: (app) => {
		app.z.config = zentinel.config;
        app.z.env = zentinel.environment;
	},
	...zentinel,
};
