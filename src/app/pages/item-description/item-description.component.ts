import { Component, Input, inject, signal, SimpleChanges} from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { ProductListService } from '../../service/product-list.service';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-description',
  standalone: true,
  imports: [NavComponent, FooterComponent, CurrencyPipe],
  templateUrl: './item-description.component.html',
  styleUrl: './item-description.component.css',
})
export class ItemDescriptionComponent {

  private productService = inject(ProductListService);

  products = signal<any>({});
  @Input() id: String = '';

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


  ngOnInit() {
    console.warn('[ngOnInit] se ha inicializado el componente detail');
    this.productService.getProductsById(this.id).subscribe({
      next: (products) => {
        console.log(products);
        this.products.set(products);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }}
