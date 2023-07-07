class ProductFeatures {
  name: string;
  description: string;
}

class ProductImages {
  url: string;
  description: string;
}

export default class ProductListDTO {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly value: number,
    readonly availableQuantity: number,
    readonly description: string,
    readonly features: ProductFeatures[],
    readonly images: ProductImages[],
    readonly category: string,
  ) {}
}
