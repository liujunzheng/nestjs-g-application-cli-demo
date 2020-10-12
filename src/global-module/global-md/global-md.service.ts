import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalMdService {
    index() {
        return 'hello , global-module global-md-service , index';
    }
}
