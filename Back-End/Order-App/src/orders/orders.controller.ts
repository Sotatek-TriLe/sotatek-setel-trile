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
import { OrderStateMachine } from './order.machine';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Get()
  async find(): Promise<Order[]> {
    return this.orderService.find();
  }
  @Get(':id')
  async processPayment(@Param('id') id:string): Promise<OrderStateMachine> {
    console.log('vao controller')
    return this.orderService.processPayment(id);
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
