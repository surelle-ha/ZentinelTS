import { Express, Router, Request, Response } from 'express';

module.exports = function (app: Express): Router {
	const router = Router();

	const { Authenticate, SequelizeGuard } = app.z.middlewares;

	router.post(
		"/webhook/ratelimit/reset",
		[Authenticate.authenticate],
		async (req: Request, res: Response) => {
			app.z.ratelimit.resetKey(req.ip);
			res.json({ status: "success", message: "Rate limit is reset!", request_by: req.user.id });
		}
	);
	return router;
};
