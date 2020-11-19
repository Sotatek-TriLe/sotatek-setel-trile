import {Controller, Get} from '@nestjs/common';
import {ProductService} from './product.service';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {
    	this.productService.seed();
    }

    @Get()
    async getProducts() {
        return await this.productService.findAll();
    }

}
