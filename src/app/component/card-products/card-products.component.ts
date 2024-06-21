import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-card-products',
  standalone: true,
  imports: [ReactiveFormsModule,CurrencyPipe],
  templateUrl: './card-products.component.html',
  styleUrl: './card-products.component.css'
})
export class CardProductsComponent {
  private cartService = inject(CartService)
  @Input() product: any;

  productQuantity = new FormControl(0);

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && this.product) {
      this.productQuantity.setValue(this.product.quantity)
    }
  }

  increment(productId: string) {
    this.cartService.incrementQuantity(productId)
  }

  decrement(productId: string) {
    this.cartService.decrementQuantity(productId)
  }

}
function inject(CartService: typeof CartService) {
  throw new Error('Function not implemented.');
}

