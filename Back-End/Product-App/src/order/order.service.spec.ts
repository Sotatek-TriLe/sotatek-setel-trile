import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Orders, OrderDocument } from '../schemas/orders.schema';
import { CreateOrdersDto, Status } from './create-orders.dto';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderService],
    }).compile();

    service = module.get<OrderService>(OrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
