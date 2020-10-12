import { Module } from '@nestjs/common';
import { TestComService } from './test-com/test-com.service';

@Module({
  providers: [TestComService],
  exports: [
    TestComService
  ]
})
export class CommonModuleModule {}
