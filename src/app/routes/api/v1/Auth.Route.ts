import { Express, Router } from "express";

module.exports = (app: Express): Router => {
	const router = Router();
	const { Auth: AuthController } = app.z.controllers;
	const { Auth: AuthMiddleware } = app.z.middlewares;
	const { Auth: AuthValidation } = app.z.validations;
	
	router.post(
		"/auth/login",
		[AuthValidation.check.login],
		AuthController.loginUser
	);
	router.post(
		"/auth/register",
		[AuthValidation.check.register],
		AuthController.registerUser
	);
	router.post(
		"/auth/logout",
		[AuthMiddleware.authenticate],
		AuthController.logoutUser
	);

	return router;
};
