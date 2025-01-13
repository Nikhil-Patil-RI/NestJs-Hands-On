import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class BookMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('This is class based middleware...');
    next();
    let protocol = req.protocol; // 'http'
    let host = req.get('host'); // 'localhost:3000'
    let url = req.originalUrl; // '/books'
    let method = req.method; // 'GET'
    let date = new Date().toDateString();

    console.log(`${date} ${method} ${protocol}://${host}${url}`);
  }
}
