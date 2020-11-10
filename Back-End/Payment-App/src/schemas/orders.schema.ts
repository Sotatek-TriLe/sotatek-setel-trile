import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, PromiseProvider } from 'mongoose';
export type OrderDocument = Orders & Document;
@Schema()
export class Orders{
    @Prop()
    name: String;

    @Prop()
    description: String;

    @Prop()
    price: String;

    @Prop()
    image: String;

    @Prop()
    status: Status 
}
enum Status {
    Created=1,
    Confirmed=2,
    Cancelled=3,
    Delivered=4
}
export const OrdersSchema = SchemaFactory.createForClass(Orders)
