const nodemailer = require("nodemailer");

import { Express } from 'express';

module.exports = function setupMailer (app: Express) {
	const { env } = app.z;
	const secureConnection = env.mailer.secure;
	
	app.z.mailer = nodemailer.createTransport({
		port: env.mailer.port, 
		host: env.mailer.host,
        secureConnection: secureConnection,
		auth: {
			user: env.mailer.username,
			pass: env.mailer.password,
		},
		tls: {
            ciphers: env.mailer.cipher
        }
	});
};
