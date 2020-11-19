import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order, OrderSchema } from './schemas/order.schema';
import { PaymentModule } from '../payment/payment.module';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Order.name, schema:OrderSchema}]),
    PaymentModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
