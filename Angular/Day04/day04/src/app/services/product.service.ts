import { IProduct } from './../models/iproduct';
import { Injectable } from '@angular/core';

import { productsList } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IProduct[];
  constructor() {
    this.products = productsList;
  }

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(productId: any): IProduct | undefined {
    return this.products.find((product) => product.id == productId);
  }
  addProduct(product: any) {
    return this.products.push(product);
  }
  deleteProduct(productId: any) {
    this.products = this.products.filter((product) => product.id != productId);

    return this.products;
  }
}
