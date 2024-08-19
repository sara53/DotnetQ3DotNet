import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product: any;
  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private productServices: ProductService
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.product = this.productServices.getProductById(this.productId);
    console.log(this.product);
  }
  backToProducts() {
    // logic
    this.router.navigate(['/products']);
  }
}
