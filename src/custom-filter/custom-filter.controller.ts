import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('custom-filter')
export class CustomFilterController {
    @Get()
    index(): string {
        /**
         * 当第一个参数为对象时，第二个参数将被忽略，直接返回第一个参数的序列化，但第二个参数必传
         */
        throw new HttpException({
            status: HttpStatus.UNAUTHORIZED,
            error: 'hello Forbidden'
        }, HttpStatus.FORBIDDEN);
        return 'hello , custom filter , index';
    }
}
