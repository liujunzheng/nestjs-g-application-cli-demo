import { applyDecorators, SetMetadata } from '@nestjs/common';
import { Test } from './test.decorator';

export const Apply = (data) => {
    console.log('Apply data', data);
    return applyDecorators(
        SetMetadata('data', data),
        Test('apply-call-test')
    );
};
