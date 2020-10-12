import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestLibModule } from '@app/test-lib';
import { AppChildOneController } from './app-child-one/app-child-one.controller';
import { AppChildTwoController } from './app-child-two/app-child-two.controller';
import { CustomDecoratorController } from './custom-decorator/custom-decorator.controller';
import { CustomFilterController } from './custom-filter/custom-filter.controller';
import { TestGateway } from './gateeay/test.gateway';
import { CustomGuardController } from './custom-guard/custom-guard.controller';
// import { APP_GUARD } from '@nestjs/core';
// import { TestGuard } from './guard/test.guard';
import { CustomInterceptorController } from './custom-interceptor/custom-interceptor.controller';
import { CustomMiddlewareController } from './custom-middleware/custom-middleware.controller';
import { TestMiddleware } from './middleware/test.middleware';
import { CustomModuleModule } from './custom-module/custom-module.module';
import { CommonModuleModule } from './common-module/common-module.module';
import { GlobalModuleModule } from './global-module/global-module.module';
import { Test } from './provider/test';
import { CustomPipeController } from './custom-pipe/custom-pipe.controller';
import { TestResolver } from './resolver/test/test.resolver';

@Module({
  imports: [
    TestLibModule,
    CustomModuleModule,
    CommonModuleModule,
    GlobalModuleModule
  ],
  controllers: [
    AppController,
    AppChildOneController,
    AppChildTwoController,
    CustomDecoratorController,
    CustomFilterController,
    CustomGuardController,
    CustomInterceptorController,
    CustomMiddlewareController,
    CustomPipeController
  ],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: TestGuard
    // },
    TestGateway,
    Test,
    TestResolver
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TestMiddleware)
      .forRoutes({
        path: 'custom-*',
        method: RequestMethod.GET
      })
      // .forRoutes('custom-middleware');
  }
}
