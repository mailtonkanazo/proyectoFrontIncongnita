import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardLoginComponent } from '../../component/card-login/card-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
