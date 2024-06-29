import { Component, inject } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NavComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

private CartService = inject(CartService);
cartProducts = this.CartService.products;

  shippingDetails = new FormGroup({
    name: new FormControl(""),
    contactNumber: new FormControl(""),
    address: new FormControl(""),
    complement: new FormControl(""),
    paymentMethod: new FormControl("")
  })

  onSubmit() {
    if(this.shippingDetails.valid && this.cartProducts().size >= 1){
      this.CartService.checkout(this.shippingDetails.value)
      .subscribe({
        next: () => console.log("pedido hecho, gracias")
      })
    }
    else{
      console.log("no hay suficientes productos")
    }
  }
}
