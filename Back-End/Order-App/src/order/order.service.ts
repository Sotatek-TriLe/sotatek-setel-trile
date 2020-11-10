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

    async create(createOrdersDto: CreateOrdersDto): Promise<Orders> {
        const createdOrders = new this.orderModel(createOrdersDto);
        return createdOrders.save();
    }
    

    async findAll(): Promise<Orders[]> {
        return this.orderModel.find().exec();
    }

    async findOne(name: string): Promise<Orders> {
        return this.orderModel.findOne({
            "name": name,
        }).exec();
    }
    async updateStatus(updateStt: UpdateStt): Promise<Orders> {
        return this.orderModel.updateOne({ "name": updateStt.name }, { $set: { "status": updateStt.status } }).exec();

    }
    async deleteOrder(name: string): Promise<Orders[]> {
        try {
            await this.orderModel.deleteOne({ name }).exec();
        } catch (error) {
            console.log(error)
        }
        return this.orderModel.find().exec();
    }


}
