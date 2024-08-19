import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  productId: any;
  productData: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productServices: ProductService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId != 0) {
      this.productData = this.productServices.getProductById(this.productId);
    }
  }
  productOperation(e: any) {
    e.preventDefault();

    if (this.productId == 0) {
      let id = this.productServices.products.length + 1;
      let product = { ...this.productData, id };
      this.productServices.addProduct(product);
      this.router.navigate(['/products']);
    } else {
      // edit
    }
  }
}
