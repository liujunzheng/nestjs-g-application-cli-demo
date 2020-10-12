import { Controller, Get } from '@nestjs/common';

@Controller('app-child-one')
export class AppChildOneController {
    @Get()
    test (): string{
        return 'hello , app-child-one test method'
    }
}
