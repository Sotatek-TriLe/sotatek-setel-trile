import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { DatabaseModule } from './database/database.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [OrderModule, DatabaseModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

