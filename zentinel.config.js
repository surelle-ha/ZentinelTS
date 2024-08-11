require("dotenv").config();

const zentinel = {
    app: {
        name: process.env.APP_NAME,
        version: process.env.APP_VERSION
    },
    
    config: {
        /**********************************************
         * Compress:
         * Enables compression to reduce the size of responses and improve performance.
         **********************************************/
        compress: true,

        /**********************************************
         * Redis:
         * Configures the use of Redis for caching and rate limiting to enhance scalability
         * and prevent abuse while ensuring fair usage.
         **********************************************/
        redis: false,

        /**********************************************
         * RATELIMITER:
         * Activates rate limiting to prevent abuse and ensure fair usage.
         **********************************************/
        ratelimiter: true,

        /**********************************************
         * HELMET:
         * Applies security headers to protect against various web vulnerabilities.
         **********************************************/
        helmet: true,

        /**********************************************
         * CORS:
         * Configures Cross-Origin Resource Sharing settings.
         **********************************************/
        cors: true,

        /**********************************************
         * PROMETHEUS:
         * Exposes metrics for monitoring and 
         * alerting with Prometheus. Once activated, 
         * web app will provide information at /metrics
         **********************************************/
        prometheus: true,
    },

    /**********************************************
     * Below are the required configuration for
     * Sequelize ORM. Only modify this if you know
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
    },
    ...zentinel
};
