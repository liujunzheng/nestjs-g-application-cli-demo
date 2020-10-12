import { SetMetadata } from '@nestjs/common';

export const Test = (...args: string[]) => {
    console.log('Test Decorator args', args);
    const setMeta = SetMetadata('test', args)
    console.log('Test Decorator SetMetadata', setMeta);
    return setMeta;
};
