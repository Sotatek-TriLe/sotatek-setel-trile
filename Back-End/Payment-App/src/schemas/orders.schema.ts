import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, PromiseProvider } from 'mongoose';
export type OrderDocument = Orders & Document;
@Schema()
export class Orders {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: string;

  @Prop()
  image: string;

  @Prop()
  status: Status;
}
enum Status {
  Created = 1,
  Confirmed = 2,
  Cancelled = 3,
  Delivered = 4,
}
export const OrdersSchema = SchemaFactory.createForClass(Orders);
