import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TestMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('test middleware', req.query);
    next();
  }
}
