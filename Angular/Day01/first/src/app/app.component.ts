import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/navbar/nav.component';
import { ContentComponent } from './components/content/content.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    NavComponent,
    ContentComponent,
    SliderComponent,
    ProductsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first';
}
