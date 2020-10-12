import { Module, Global } from '@nestjs/common';
import { GlobalMdService } from './global-md/global-md.service';

@Global()
@Module({
  providers: [GlobalMdService],
  exports: [
    GlobalMdService
  ]
})
export class GlobalModuleModule {}
