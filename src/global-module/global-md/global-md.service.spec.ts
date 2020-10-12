import { Test, TestingModule } from '@nestjs/testing';
import { GlobalMdService } from './global-md.service';

describe('GlobalMdService', () => {
  let service: GlobalMdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlobalMdService],
    }).compile();

    service = module.get<GlobalMdService>(GlobalMdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
