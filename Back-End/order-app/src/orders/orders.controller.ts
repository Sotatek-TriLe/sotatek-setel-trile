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
import { Order } from './interfaces/order.interface';
import { CreateOrderDto } from './dtos/createOrder.dto';
import { UpdateOrderDto } from './dtos/updateOrder.dto';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Get()
  async find(): Promise<Order[]> {
    return await this.orderService.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Order> {
    return await this.orderService.findOne(Number(id));
  }

  @Post()
  async create(@Body() body: CreateOrderDto): Promise<void> {
    await this.orderService.create(body);
  }

  @Put(':id/request-cancel')
  async requestCancel(@Param('id') id: number) {
    await this.orderService.requestCancel(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.orderService.delete(id);
  }
}
