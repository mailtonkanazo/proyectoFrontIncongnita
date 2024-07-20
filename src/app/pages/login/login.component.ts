import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CardLoginComponent } from '../../component/card-login/card-login.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/users.models'
import { Token } from '@angular/compiler';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardLoginComponent, CommonModule, ReactiveFormsModule, FormsModule, NavComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:any;

  constructor(
    private userService: UserService, private router:Router){
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }

    const user:User = {
      password: this.loginForm.value.password,
      email: this.loginForm.value.email,
    }

    this.userService.login(user).subscribe({
      next:(token)=>{
        console.log(token)
        this.userService.saveToken(token)
        this.router.navigate(['/home'])
      },
      error:(error) =>{
        console.log(error);
      }
    })
  }

}
