import { Component } from '@angular/core';
import { ProductitemComponent } from './productitem/productitem.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductitemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
