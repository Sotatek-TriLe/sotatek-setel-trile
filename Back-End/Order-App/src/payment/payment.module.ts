import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Orders, OrdersSchema} from "../schemas/orders.schema";
import {HttpModule} from '@nestjs/common';

@Module({imports:[MongooseModule.forFeature([{name:Orders.name,schema:OrdersSchema}]), HttpModule],
  providers: [PaymentService],
  controllers: [PaymentController]
})
export class PaymentModule {}
