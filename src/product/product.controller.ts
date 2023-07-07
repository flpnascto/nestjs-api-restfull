import { Body, Controller, Get, Post } from '@nestjs/common';
import ProductRepository from './product.repository';
import { ProductCreateDTO } from './dto/ProductCreate.dto';
import ProductEntity from './product.entity';
import { v4 as uuid } from 'uuid';
import ProductListDTO from './dto/ProductList.dto';

@Controller('/products')
export default class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async create(@Body() product: ProductCreateDTO) {
    const productEntity = new ProductEntity();
    productEntity.id = uuid();
    productEntity.name = product.name;
    productEntity.value = product.value;
    productEntity.availableQuantity = product.availableQuantity;
    productEntity.description = product.description;
    productEntity.features = product.features;
    productEntity.images = product.images;
    productEntity.category = product.category;
    productEntity.userId = product.userId;

    await this.productRepository.save(productEntity);
    return productEntity;
  }

  @Get()
  async findAll() {
    const products = await this.productRepository.findAll();
    const productList = products.map(
      (product) =>
        new ProductListDTO(
          product.id,
          product.name,
          product.value,
          product.availableQuantity,
          product.description,
          product.features,
          product.images,
          product.category,
        ),
    );
    return productList;
  }
}
