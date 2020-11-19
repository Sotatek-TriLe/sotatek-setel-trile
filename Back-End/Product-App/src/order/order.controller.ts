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



}
