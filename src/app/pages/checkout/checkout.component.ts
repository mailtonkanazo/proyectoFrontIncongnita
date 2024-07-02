import { Component, inject } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NavComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

private CartService = inject(CartService);
private router = inject(Router);
cartProducts = this.CartService.products;

  shippingDetails = new FormGroup({
    name: new FormControl(""),
    contactNumber: new FormControl(""),
    address: new FormControl(""),
    complement: new FormControl(""),
    paymentMethod: new FormControl("")
  })

  onSubmit() {
    if (this.shippingDetails.valid && this.cartProducts().size >= 1) {
      this.CartService.checkout(this.shippingDetails.value)
        .subscribe({
          next: () => {
            alert("Gracias por tu compra y por preferirnos, ¡que lo disfrutes!");
            this.router.navigate(['/home']);
          }
        });
    } else {
      alert("No has añadido ningún producto");
    }
  }}