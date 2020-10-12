import { Test, TestingModule } from '@nestjs/testing';
import { CustomDecoratorController } from './custom-decorator.controller';

describe('CustomDecorator Controller', () => {
  let controller: CustomDecoratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomDecoratorController],
    }).compile();

    controller = module.get<CustomDecoratorController>(CustomDecoratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
