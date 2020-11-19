import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './schemas/order.schema';
import { CreateOrderDto } from './dtos/createOrder.dto';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Get()
  async find(): Promise<Order[]> {
    return this.orderService.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Order> {
    return this.orderService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreateOrderDto): Promise<Order> {
    return this.orderService.create(body);
  }

  @Post(':id/cancel')
  async cancel(@Param('id') id: string): Promise<Order> {
    return this.orderService.cancel(id);
  }
}
