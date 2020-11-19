import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../schemas/product.schema';
import { products } from './product.seeding';
import { CreateProductDto } from './product.dto';

@Injectable()

export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async seed() {
    	await this.drop();
    	products.map((data) => this.create(data));
    }

    async create(input: CreateProductDto): Promise<Product> {
        const product = new this.productModel(input);
        return product.save();
    }

    async drop(){
        return await this.productModel.deleteMany({}).exec();
    }
}
