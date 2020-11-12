import {Controller, Get, Param, Post, Body, Delete, Put} from '@nestjs/common';
import {OrderService, UpdateStt} from './order.service';
import {CreateOrdersDto, Status} from './create-orders.dto';
import {initOrder} from '../database/database.initDB'

export type updateStt ={
    'name':string;
    'status':Status
}

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {
    }

    @Get()
    async getOrders() {
        const allOrder = await this.orderService.findAll();
        return allOrder;
    }

    @Get(':orderName')
    async getOneOrder(@Param('orderName') orderName) {
        const order = await this.orderService.findOne(orderName);
        return order;
    }

    @Post('create')
    async createNewOrder(@Body() newOrder: CreateOrdersDto) {
        await this.orderService.create(newOrder);
        return this.orderService.findAll();
    }

    @Put('update')
    async updateStatus(@Body() updateStt:UpdateStt) {
        return this.orderService.updateStatus(updateStt);

    }

    @Delete('delete/:orderName')
    async deleteOrder(@Param('orderName') orderName) {
        try {

            await this.orderService.deleteOrder(orderName);
            return this.orderService.findAll();

        } catch (error) {
            console.log(error)
        }
    }


}
