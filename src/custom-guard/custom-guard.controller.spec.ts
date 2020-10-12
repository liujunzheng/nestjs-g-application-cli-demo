import { Test, TestingModule } from '@nestjs/testing';
import { CustomGuardController } from './custom-guard.controller';

describe('CustomGuard Controller', () => {
  let controller: CustomGuardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomGuardController],
    }).compile();

    controller = module.get<CustomGuardController>(CustomGuardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
