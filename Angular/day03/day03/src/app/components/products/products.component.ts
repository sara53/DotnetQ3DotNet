import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { products } from '../../models/products';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Iproduct[];

  constructor() {
    this.products = products;
  }
  removeProduct(productId: any) {
    this.products = this.products.filter((product) => product.id != productId);
  }
  editFirstProduct() {
    this.products[0] = { ...this.products[0], name: 'New Book' };
  }
}
