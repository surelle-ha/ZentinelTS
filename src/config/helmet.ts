import { Express } from 'express';
import helmet from 'helmet';

module.exports = async function setupHelmet(app: Express): Promise<void> {
    app.use(helmet({
        xPoweredBy: true,
        contentSecurityPolicy: false,
    }))
}
