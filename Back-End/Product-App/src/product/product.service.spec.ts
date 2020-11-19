import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
