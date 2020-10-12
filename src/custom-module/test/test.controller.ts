import { Controller, Get } from '@nestjs/common';
import { TestComService } from 'src/common-module/test-com/test-com.service';
import { GlobalMdService } from 'src/global-module/global-md/global-md.service';

@Controller('test')
export class TestController {
    constructor(
        private testComService: TestComService,
        private globalMdService: GlobalMdService
    ) {}
    @Get()
    index() {
        return 'hello , custom-module test-controller , index';
    }

    @Get('common-module')
    commonModule() {
        return this.testComService.index();
    }

    @Get('global-module')
    globalModule() {
        return this.globalMdService.index();
    }
}
