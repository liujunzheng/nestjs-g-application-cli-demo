import { SetMetadata } from '@nestjs/common';

export const Roles = (...args: string[]) => {
    console.log('roles decorator args', args)
    return SetMetadata('roles', args)
};
