import { Express } from 'express';
import helmet from 'helmet';

export default async function setupHelmet(app: Express): Promise<void> {
    app.use(helmet({
        xPoweredBy: true,
    }))
}
