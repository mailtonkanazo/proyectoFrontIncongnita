import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
      name: new FormControl("", {
      validators: [Validators.required]}),
      lastname: new FormControl("", {
      validators: [Validators.required]}),
      identification: new FormControl("", {
      validators: [Validators.required]}),
      email: new FormControl("", {
      validators: [Validators.required]}),
      movil: new FormControl("", {
      validators: [Validators.required]}),
      password: new FormControl("", {
      validators: [Validators.required]}),
    })
  }
  onSubmit(event: Event) {
    if (this.registerForm.valid) {
      console.log("Podemos enviar la información")
      this.userService.register(this.registerForm.value).subscribe({
        next: response => {
          alert("Creaste tu usuario")
          this.router.navigate(["/login"])
        },
        error: error => {
          console.log(error)
          alert("La contraseña debe tener mínimo 6 caracteres, 1 mayúscula, 1 número, y 1 caracter especial")
        }
      })
    } else {
      alert("Debes llenar todos los campos")
    }
  }
}
