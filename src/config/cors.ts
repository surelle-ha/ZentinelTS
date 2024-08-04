import { Express } from 'express';
import cors, { CorsOptions } from 'cors';

export default async function setupCors(app: Express): Promise<void> {
    let allowedOrigins = ["http://localhost:8800", "http://localhost:5500", "http://127.0.0.1:5500"];

    const config: CorsOptions = {
        origin: (origin: string | undefined, callback: (err: Error | null, allow: boolean) => void) => {
            if (!origin) {
                return callback(null, true);
            }
            if (allowedOrigins.indexOf(origin) === -1) {
                const msg = "The CORS policy for this site does not allow access from the specified Origin.";
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
    };

    const cors_supercharged = cors(config);
    app.use(cors_supercharged);
};
