require('dotenv').config();
const nodemailer = require("nodemailer");

import { Express } from 'express';

export default function setupMailer (app: Express) {
	const secureConnection = (process.env.MAILER_SECURE || 'false').toLowerCase() === 'true';
	
	app.z.mailer = nodemailer.createTransport({
		port: parseInt(process.env.MAILER_PORT || '587', 10), 
		host: process.env.MAILER_HOST,
        secureConnection: secureConnection,
		auth: {
			user: process.env.MAILER_USER,
			pass: process.env.MAILER_PASS,
		},
		tls: {
            ciphers: process.env.MAILER_CIPHER
        }
	});
};
