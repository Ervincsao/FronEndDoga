import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  updateProduct(key: string, product: any): Observable<any> {
    return this.http.put<any>(`https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/${key}.json`, product);
  }

  deleteProduct(key: string): Observable<any> {
    return this.http.delete<any>(`https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/${key}.json`);
  }
}

