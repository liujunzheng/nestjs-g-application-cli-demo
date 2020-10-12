import { Injectable } from '@nestjs/common';

@Injectable()
export class TestLibService {
    getHello(): string {
        return 'Hello World , this is test-lib.service!';
    }
}
