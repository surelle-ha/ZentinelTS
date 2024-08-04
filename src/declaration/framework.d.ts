import * as express from 'express';

declare global {
  namespace Express {
    interface Application {
      z: {
        sequelize: any;
        logger: any;
        ratelimit: any;
        controllers?: any;
        middlewares?: any;
        models?: any;
        services?: any;
        utilities?: any;
        exceptions?: any;
        validations?: any;
      };
    }
  }
}
