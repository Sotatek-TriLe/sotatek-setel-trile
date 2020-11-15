import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [],
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
