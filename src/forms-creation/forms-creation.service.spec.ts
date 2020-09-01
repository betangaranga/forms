import { Test, TestingModule } from '@nestjs/testing';
import { FormsCreationService } from './forms-creation.service';

describe('FormsCreationService', () => {
  let service: FormsCreationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormsCreationService],
    }).compile();

    service = module.get<FormsCreationService>(FormsCreationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
