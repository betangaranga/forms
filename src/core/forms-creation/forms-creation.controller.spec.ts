import { Test, TestingModule } from '@nestjs/testing';
import { FormsCreationController } from './forms-creation.controller';

describe('FormsCreationController', () => {
  let controller: FormsCreationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormsCreationController],
    }).compile();

    controller = module.get<FormsCreationController>(FormsCreationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
