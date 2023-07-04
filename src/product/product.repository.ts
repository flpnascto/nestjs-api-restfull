import { Injectable } from '@nestjs/common';

@Injectable()
export default class ProductRepository {
  private products = [];
  async save(product: any) {
    this.products.push(product);
  }

  async findAll() {
    return this.products;
  }
}
