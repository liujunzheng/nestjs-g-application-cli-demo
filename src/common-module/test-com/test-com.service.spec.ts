import { Test, TestingModule } from '@nestjs/testing';
import { TestComService } from './test-com.service';

describe('TestComService', () => {
  let service: TestComService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestComService],
    }).compile();

    service = module.get<TestComService>(TestComService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
