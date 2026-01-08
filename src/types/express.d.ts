import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user: {
        account: string;
        identity: string;
        [key: string]:  any;
      };
    }
  }
}