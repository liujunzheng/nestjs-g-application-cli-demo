import { Module } from '@nestjs/common';
import { TestUtilService } from './test-util.service';

@Module({
  providers: [TestUtilService],
  exports: [TestUtilService],
})
export class TestUtilModule {}
