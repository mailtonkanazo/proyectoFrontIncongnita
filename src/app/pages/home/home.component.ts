import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardProductsComponent } from '../../component/card-products/card-products.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { NavComponent } from '../../component/nav/nav.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardProductsComponent,FooterComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}