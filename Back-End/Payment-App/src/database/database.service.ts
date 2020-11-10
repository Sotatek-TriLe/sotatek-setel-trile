import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Orders, OrderDocument } from '../schemas/orders.schema';
import { CreateOrdersDto, Status } from '../order/create-orders.dto';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(Orders.name) private orderModel: Model<OrderDocument>,
  ) {}

  async create(createOrdersDto: CreateOrdersDto): Promise<Orders> {
    const createdOrders = new this.orderModel(createOrdersDto);
    return createdOrders.save();
  }
  async drop() {
    try {
      await this.orderModel.deleteMany({}).exec();
    } catch (err) {
      console.log(err);
    }
    return await this.orderModel.find().exec();
  }
}
