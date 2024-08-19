import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnInit, OnDestroy, OnChanges {
  @Input() product: any;

  previousProductName: any;
  @Output() onRemoveProduct = new EventEmitter();
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.previousProductName = changes['product'].previousValue;
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
  ngOnInit(): void {}

  removeProductHandler(productId: any) {
    this.onRemoveProduct.emit(productId);
  }
}
