import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from './Purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private url:string;

  constructor(private http:HttpClient) { 
    this.url="http://localhost:8080/purchase";
  }
  public save(purchase:Purchase):Observable<Purchase>{
    return this.http.post<Purchase>(this.url, purchase);
  }
  public getAllPurchases():Observable<Purchase[]>{
    return this.http.get<Purchase[]>(this.url+"s");
  }
}

