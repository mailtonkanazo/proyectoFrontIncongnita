import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardLoginComponent } from '../../component/card-login/card-login.component';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardLoginComponent, NavComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
