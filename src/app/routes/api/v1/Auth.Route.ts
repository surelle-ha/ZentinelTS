import { Express, Router } from "express";

module.exports = (app: Express): Router => {
	const router = Router();
	const { Auth } = app.z.controllers;
	const { Authenticate } = app.z.middlewares;
	// const { Auth } = app.z.validations;

	router.post(
		"/auth/login",
		// [AuthValidation.check.login],
		Auth.loginUser
	);
	router.post(
		"/auth/register",
		// [AuthValidation.check.register],
		Auth.registerUser
	);
	router.post(
		"/auth/logout",
		// [AuthenticateMiddleware.authenticate],
		Auth.logoutUser
	);

	return router;
};
