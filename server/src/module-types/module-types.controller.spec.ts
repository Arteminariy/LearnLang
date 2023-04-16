import { Test, TestingModule } from '@nestjs/testing';
import { ModuleTypesController } from './module-types.controller';
import { ModuleTypesService } from './module-types.service';

describe('ModuleTypesController', () => {
  let controller: ModuleTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleTypesController],
      providers: [ModuleTypesService],
    }).compile();

    controller = module.get<ModuleTypesController>(ModuleTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
