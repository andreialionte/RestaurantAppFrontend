import { RegisterService } from './../../register.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private regService: RegisterService) { }

  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    console.log('Form submitted');
    console.log('Username:', this.firstName + " " + this.lastName);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
    console.log('Phone Number:', this.phoneNumber);

    if (this.password === this.confirmPassword) {
      this.regService.registerButton(this.firstName, this.lastName, this.phoneNumber, this.email, this.password)
        .subscribe(
          response => {
            console.log('Registration successful:', response);
          },
          error => {
            console.error('Registration failed:', error);
          }
        );
    } else {
      alert("Passwords do not match")
    }
  }
}