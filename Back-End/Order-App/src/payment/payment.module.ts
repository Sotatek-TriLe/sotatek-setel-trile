import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Orders, OrdersSchema} from "../schemas/orders.schema";

@Module({imports:[MongooseModule.forFeature([{name:Orders.name,schema:OrdersSchema}])],
  providers: [PaymentService],
  controllers: [PaymentController]
})
export class PaymentModule {}
