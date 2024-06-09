import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<string> {
    return this.http.post<{ message: string, token: string }>(`https://localhost:5001/Login?Email=${email}&Password=${password}`, { email, password })
      .pipe(
        map(response => response.token) // extract the token from the response
      );
  }
}