import { Test, TestingModule } from '@nestjs/testing';
import { CustomMiddlewareController } from './custom-middleware.controller';

describe('CustomMiddleware Controller', () => {
  let controller: CustomMiddlewareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomMiddlewareController],
    }).compile();

    controller = module.get<CustomMiddlewareController>(CustomMiddlewareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
