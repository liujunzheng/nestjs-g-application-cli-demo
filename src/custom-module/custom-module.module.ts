import { Module } from '@nestjs/common';
import { TestController } from './test/test.controller';
import { CommonModuleModule } from 'src/common-module/common-module.module';

@Module({
  controllers: [TestController],
  imports: [
    CommonModuleModule
  ]
})
export class CustomModuleModule {}
