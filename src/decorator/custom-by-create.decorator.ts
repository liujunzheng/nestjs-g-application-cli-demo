import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * createParamDecorator 只能用于请求中的通用装饰器
 */
export const CustomByCreate = createParamDecorator(
    (data, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        console.log('CustomByCreate data', data);
        console.log('CustomByCreate request', request);
        return '';
    },
);
