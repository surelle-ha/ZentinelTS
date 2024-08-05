import * as express from 'express';
import Request from 'express';

declare global {
  namespace Express {
    interface Application {
      z: {
        sequelize: any;
        logger: any;
        ratelimit: any;
        mailer: any;
        storage: any;
        controllers?: array;
        middlewares?: array;
        models?: array;
        services?: any;
        utilities?: any;
        exceptions?: array;
        validations?: any;
      };
    }
    interface Request {
      user: any;
    }
  }
}
