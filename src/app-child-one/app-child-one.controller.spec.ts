import { Test, TestingModule } from '@nestjs/testing';
import { AppChildOneController } from './app-child-one.controller';

describe('AppChildOne Controller', () => {
  let controller: AppChildOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppChildOneController],
    }).compile();

    controller = module.get<AppChildOneController>(AppChildOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
