const nodemailer = require("nodemailer");

import { Express } from 'express';

module.exports = function setupMailer (app: Express) {
	const { env } = app.z;
	const secureConnection = (env.MAILER_SECURE || 'false').toLowerCase() === 'true';
	
	app.z.mailer = nodemailer.createTransport({
		port: parseInt(env.MAILER_PORT || '587', 10), 
		host: env.MAILER_HOST,
        secureConnection: secureConnection,
		auth: {
			user: env.MAILER_USER,
			pass: env.MAILER_PASS,
		},
		tls: {
            ciphers: env.MAILER_CIPHER
        }
	});
};
