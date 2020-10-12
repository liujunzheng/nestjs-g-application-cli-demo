import { Controller, Get } from '@nestjs/common';

@Controller('custom-middleware')
export class CustomMiddlewareController {
    @Get()
    index() {
        return 'hello , custom-middleware , index';
    }
}
