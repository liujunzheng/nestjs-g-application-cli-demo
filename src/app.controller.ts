import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TestLibService } from '@app/test-lib';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly testLibService: TestLibService
  ) {}

  @Get()
  getHello(): string {
    return this.testLibService.getHello();
  }
}
