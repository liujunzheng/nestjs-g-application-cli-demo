import { Controller, Get } from '@nestjs/common';
import { Test } from 'src/decorator/test.decorator';
import { CustomByCreate } from 'src/decorator/custom-by-create.decorator';
import { Apply } from 'src/decorator/apply.decorator';

@Controller('custom-decorator')
export class CustomDecoratorController {
    // @Get()
    // testCustom(): object{
    //     return {
    //         msg: 'hello , test custom decorator'};
    // }
    @Get()
    @Test()
    testDefault() {
        return 'this is cusom test decorator';
    }
    @Get('createParam')
    testCreateParam(@CustomByCreate('testCustomKey') testInfo) {
        return 'this is cusom testCreateParam decorator';
    }
    @Get('apply')
    @Apply('app-data')
    testApply() {
        return 'this is cusom testApply decorator';
    }
}
