import { Injectable } from '@nestjs/common';

@Injectable()
export class TestComService {
    index() {
        return 'hello , common-module test-com-service , index';
    }
}
