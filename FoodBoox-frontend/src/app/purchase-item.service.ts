import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchaseItem } from './PurchaseItem';

@Injectable({
  providedIn: 'root'
})
export class PurchaseItemService {
  private url:string;

  constructor(private http:HttpClient) { 
    this.url="http://localhost:8080/purchaseItem";
  }
  public save(purchaseItem:PurchaseItem):Observable<PurchaseItem>{
    return this.http.post<PurchaseItem>(this.url, purchaseItem);
  }
  public getAllPurchases():Observable<PurchaseItem[]>{
    return this.http.get<PurchaseItem[]>("http://localhost:8080/purchaseItem"+"s");
  }

}
