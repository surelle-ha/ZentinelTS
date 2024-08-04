import { Express, Router } from 'express';

export default function (app: Express): Router {
    const router = Router();

    router.get('/', (req, res) => {
        res.render("index");
    });

    return router;
}
