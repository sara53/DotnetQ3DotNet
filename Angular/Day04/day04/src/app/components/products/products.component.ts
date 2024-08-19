import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../models/iproduct';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  constructor(public productService: ProductService) {}
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  deleteProductHandler(productId: any) {
    this.products = this.productService.deleteProduct(productId);
  }
}
