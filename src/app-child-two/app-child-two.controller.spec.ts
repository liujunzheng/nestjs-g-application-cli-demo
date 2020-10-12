import { Test, TestingModule } from '@nestjs/testing';
import { AppChildTwoController } from './app-child-two.controller';

describe('AppChildTwo Controller', () => {
  let controller: AppChildTwoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppChildTwoController],
    }).compile();

    controller = module.get<AppChildTwoController>(AppChildTwoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
