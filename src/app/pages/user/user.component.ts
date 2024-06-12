import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardUserComponent } from '../../component/card-user/card-user.component';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardUserComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
