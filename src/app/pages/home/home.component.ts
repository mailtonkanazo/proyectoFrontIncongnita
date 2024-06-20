import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardProductsComponent } from '../../component/card-products/card-products.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { NavComponent } from '../../component/nav/nav.component';
import { ProductListService } from '../../service/product-list.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardProductsComponent, FooterComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private productList = inject(ProductListService);
  private cartService = inject(CartService);

  productCard = this.productList.productList;
  productService: any;
  products: any;
  
  ngOnInit() {
    this.productService.list().subscribe({
      next: (response: any) => {
        this.products.set(response);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  addToCart(product: any) {
    console.log('[Componente Home]', 'El producto para agregar es...');
    console.log(product);
    this.cartService.addToCart(product);
  }
}
