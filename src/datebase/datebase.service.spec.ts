import { Test, TestingModule } from '@nestjs/testing';
import { DatebaseService } from './datebase.service';

describe('DatebaseService', () => {
  let service: DatebaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatebaseService],
    }).compile();

    service = module.get<DatebaseService>(DatebaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
