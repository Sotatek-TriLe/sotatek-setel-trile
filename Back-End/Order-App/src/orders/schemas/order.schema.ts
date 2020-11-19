import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, PromiseProvider } from 'mongoose';
import { Status } from '../interfaces/order.interface';

@Schema()
export class Order extends Document {
    @Prop()
    productList: string;

    @Prop()
    status: Status;
}

export const OrderSchema = SchemaFactory.createForClass(Order)
