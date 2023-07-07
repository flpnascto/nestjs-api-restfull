class ProductFeatures {
  name: string;
  description: string;
}

class ProductImages {
  url: string;
  description: string;
}

export default class ProductEntity {
  id: string;
  name: string;
  value: number;
  availableQuantity: number;
  description: string;
  features: ProductFeatures[];
  images: ProductImages[];
  category: string;
  userId: string;
}
