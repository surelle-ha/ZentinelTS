import { Express, Request, Response, NextFunction } from "express";

export default async function setupException(app: Express): Promise<void> {
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        let message;
        try {
            message = JSON.parse(err.message);
        } catch {
            message = err.message;
        }
        res.status(err.statusCode || 500).send({
            success: err.success || false,
            message,
            error: err.name || 'Error',
            ...(process.env.APP_ENV !== "production" ? { stack: err.stack } : {}),
        });
    });
};
