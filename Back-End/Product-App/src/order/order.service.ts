import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Orders, OrderDocument } from '../schemas/orders.schema';
import { CreateOrdersDto, Status } from './create-orders.dto';
import {initOrder,OrderFruits} from '../database/database.initDB'
export type UpdateStt ={
    'name':string;
    'status':Status
}
@Injectable()
export class OrderService {
    constructor(@InjectModel(Orders.name) private orderModel: Model<OrderDocument>) { }


    async findAll(): Promise<Orders[]> {
        return this.orderModel.find().exec();
    }



}
