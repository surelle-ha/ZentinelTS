import { Express, Router } from 'express';

export default function (app: Express): Router {
    const router = Router();

    router.get('/users', (req, res) => {
        res.json("wow its working!");
    });

    return router;
}
