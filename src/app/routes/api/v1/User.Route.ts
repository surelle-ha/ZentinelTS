import { Express, Router } from "express";

module.exports = (app: Express): Router => {
	const router = Router();
	const { User: UserController } = app.z.controllers;
	const { Auth: AuthMiddleware, Permission: PermissionMiddleware } = app.z.middlewares;

	app.use("/api/v1/users", [AuthMiddleware.authenticate]);

	router.post(
		"/users",
		[PermissionMiddleware.authorize("create-user")],
		UserController.createUser
	);

	router.get(
		"/users",
		[PermissionMiddleware.authorize("fetch-user")],
		UserController.getAllUsers
	);

	router.get(
		"/users/:user_id",
		[PermissionMiddleware.authorize("fetch-user")],
		UserController.getUser
	);

	router.patch(
		"/users/:user_id",
		[PermissionMiddleware.authorize("update-user")],
		UserController.updateUser
	);

	router.delete(
		"/users",
		[PermissionMiddleware.authorize("delete-user")],
		UserController.deleteAllUsers
	);
    
	router.delete(
		"/users/:user_id",
		[PermissionMiddleware.authorize("delete-user")],
		UserController.deleteUser
	);

	return router;
};
