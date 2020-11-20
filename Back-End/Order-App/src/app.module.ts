import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import config from './config';
import { ScheduleModule} from '@nestjs/schedule';

@Module({
  imports: [
    MongooseModule.forRoot(config.MongoUri),
    OrdersModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

