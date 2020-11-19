import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, PromiseProvider } from 'mongoose';

@Schema()
export class Product{
    @Prop()
    name: String;

    @Prop()
    description: String;

    @Prop()
    price: String;

    @Prop()
    image: String;
}
export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product)
