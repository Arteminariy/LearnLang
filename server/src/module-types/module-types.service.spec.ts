import { Test, TestingModule } from '@nestjs/testing';
import { ModuleTypesService } from './module-types.service';

describe('ModuleTypesService', () => {
  let service: ModuleTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleTypesService],
    }).compile();

    service = module.get<ModuleTypesService>(ModuleTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
