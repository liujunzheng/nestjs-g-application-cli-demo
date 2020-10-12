import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { TestInterceptor } from 'src/interceptor/test.interceptor';

@UseInterceptors(TestInterceptor)
@Controller('custom-interceptor')
export class CustomInterceptorController {
    @Get()
    index() {
        return 'hello , custom-interceptor , index';
    }
}
