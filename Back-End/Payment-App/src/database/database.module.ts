import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import { Model } from 'mongoose';
import { Orders, OrdersSchema } from '../schemas/orders.schema';
import config from '../config';
@Module({
  imports: [
    MongooseModule.forRoot(config.MongoUri), MongooseModule.forFeature([{name:Orders.name,schema:OrdersSchema}]),
  ],
  providers: [DatabaseService],
  controllers: [DatabaseController],
})
export class DatabaseModule {}
