import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import {Orders,OrdersSchema} from '../schemas/orders.schema'

@Module({
  imports:[MongooseModule.forFeature([{name:Orders.name,schema:OrdersSchema}])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
