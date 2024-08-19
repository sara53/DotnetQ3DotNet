import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductFormComponent,
    NotFoundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'day04';
}
