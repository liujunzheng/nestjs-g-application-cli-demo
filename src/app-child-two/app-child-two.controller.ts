import { Controller, Get } from '@nestjs/common';

@Controller('app-child-two')
export class AppChildTwoController {
    @Get()
    getHello(): string {
    return 'hello , app-child-two getHello';
  }
}
