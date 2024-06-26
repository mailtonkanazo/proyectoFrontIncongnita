import { Component, Input, SimpleChanges, inject } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { CartService } from '../../service/cart.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-description',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './item-description.component.html',
  styleUrl: './item-description.component.css',
})
export class ItemDescriptionComponent {
  producto: any;

  @Input() product: any;
  private cartService = inject(CartService);
  productQuantity = new FormControl(0);

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && this.product) {
      this.productQuantity.setValue(this.product.quantity);
    }
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  increment(productId: string) {
    this.cartService.incrementQuantity(productId);
  }

  decrement(productId: string) {
    this.cartService.decrementQuantity(productId);
  }

  deleteItem(productId: string) {
    this.cartService.deleteItem(productId);
  }
}
