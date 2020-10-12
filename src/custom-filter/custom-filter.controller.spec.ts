import { Test, TestingModule } from '@nestjs/testing';
import { CustomFilterController } from './custom-filter.controller';

describe('CustomFilter Controller', () => {
  let controller: CustomFilterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomFilterController],
    }).compile();

    controller = module.get<CustomFilterController>(CustomFilterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
