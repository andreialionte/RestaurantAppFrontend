import { LoginService } from './../../login.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService: LoginService) { }
  password: string = "";
  email: string = "";


  onSubmitLogin(){
    console.log("Form submitted");
    console.log("Email", this.email);
    console.log("Password", this.password);

    //here call the api with that values
    this.loginService.login(this.email, this.password).subscribe(
      token => {
        console.log("Token", token);
        localStorage.setItem("token", token);
      },
      error => {
        console.error("Login failed", error);
      }
    )
  }
}
