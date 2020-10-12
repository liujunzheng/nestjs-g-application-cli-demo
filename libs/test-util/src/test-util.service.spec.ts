import { Test, TestingModule } from '@nestjs/testing';
import { TestUtilService } from './test-util.service';

describe('TestUtilService', () => {
  let service: TestUtilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestUtilService],
    }).compile();

    service = module.get<TestUtilService>(TestUtilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
