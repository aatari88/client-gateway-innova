import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from 'src/config';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  creteProduct() {
    return 'Product created';
  }

  @Get()
  getAllProducts() {
    return this.productsClient.send({cmd: 'find-all-products'}, {});
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return 'Product ' + id;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return 'Product ' + id + ' deleted';
  }

  @Patch(':id')
  updateProduct(@Body() body: any, @Param('id') id: string) {
    return 'Product ' + id + ' updated';
  }
}
