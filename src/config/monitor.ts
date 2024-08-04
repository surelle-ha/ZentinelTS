import { Express} from 'express';
import monitor from 'express-status-monitor';

export default async function setupMonitor(app: Express): Promise<void> {
    app.use(
        monitor({
            title: "Zentinel",
            path: "/health",
            chartVisibility: {
                cpu: true,
                mem: true,
                load: true,
                heap: true,
                responseTime: true,
                rps: true,
                statusCodes: true,
            },
            healthChecks: [
                {
                    protocol: "http",
                    host: "localhost",
                    path: "/",
                    port: "8800",
                },
            ],
        })
    );
}