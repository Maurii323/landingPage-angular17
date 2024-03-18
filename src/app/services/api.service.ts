import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  private baseUrl = 'https://fakestoreapi.com/products' ;
  private _httpClient = inject(HttpClient);

  public getAllProducts():Observable<IProduct[]>{
    return this._httpClient.get<IProduct[]>(this.baseUrl);
  }

  public getProductById(id:number):Observable<IProduct>{
    return this._httpClient.get<IProduct>(`${this.baseUrl}/${id}`);
  }
}
