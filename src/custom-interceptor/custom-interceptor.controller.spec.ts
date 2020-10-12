import { Test, TestingModule } from '@nestjs/testing';
import { CustomInterceptorController } from './custom-interceptor.controller';

describe('CustomInterceptor Controller', () => {
  let controller: CustomInterceptorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomInterceptorController],
    }).compile();

    controller = module.get<CustomInterceptorController>(CustomInterceptorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
