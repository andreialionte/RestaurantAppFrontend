import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuitemsService {
  constructor(private http: HttpClient) {}

  getItemsByCategory(categoryId: number): Observable<any[]> {
    return this.http.get<any[]>(`https://localhost:5001/api/Item/GetItemsByCategory?categoryId=${categoryId}`);
  }
}
