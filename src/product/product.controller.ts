import { Body, Controller, Get, Post } from '@nestjs/common';
import ProductRepository from './product.repository';

@Controller('/products')
export default class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async create(@Body() product: any) {
    this.productRepository.save(product);
    return product;
  }

  @Get()
  async findAll() {
    return this.productRepository.findAll();
  }
}
