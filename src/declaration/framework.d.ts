import * as express from 'express';
import Request from 'express';

declare global {
  namespace Express {
    interface Application {
      z: {
        server: any;
        env: any;
        sequelize: any;
        logger: any;
        ratelimit: any;
        mailer: any;
        cache:any;
        storage: any;
        socket: any;
        controllers?: array;
        middlewares?: array;
        models?: array;
        services?: any;
        utilities?: any;
        exceptions?: array;
        validations?: any;
        config?: any;
      };
    }
    interface Request {
      user: any;
    }
  }
}
