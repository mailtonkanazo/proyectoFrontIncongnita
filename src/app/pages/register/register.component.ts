import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';
UserService

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NavComponent, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:any;

  constructor(private userService:UserService, private router:Router){
    this.registerForm = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      identification: new FormControl(),
      email: new FormControl(),
      movil: new FormControl(),
      password: new FormControl(),
    })
  }
  onSubmit(event: Event) {
    if (this.registerForm.valid) {
      console.log("Podemos enviar la información")
      this.userService.register(this.registerForm.value).subscribe({
        next: response => {
          this.router.navigate(["/login"])
        },
        error: error => {
          console.log(error)
        }
      })
    } else {
      console.log("Campos no válidos")
    }
  }
}
