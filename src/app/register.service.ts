// Angular Service (register.service.ts)

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerButton(firstName: string, lastName: string, phoneNumber: string, email: string, password: string) {
    const userData = { firstName, lastName, phoneNumber, email, password }; // Ensure all fields are included
    return this.http.post(`https://localhost:5001/Register?Email=${email}@gmail.com&Password=${password}&FirstName=${firstName}&LastName=${lastName}&PhoneNumber=${phoneNumber}`, userData);
  }
}
