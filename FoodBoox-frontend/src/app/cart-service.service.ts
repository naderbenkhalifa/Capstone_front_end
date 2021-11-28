import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FoodBoxModel } from './food-box-model';
import { Purchase } from './Purchase';
import { PurchaseItemService } from './purchase-item.service';
import { PurchaseService } from './purchase.service';
import { PurchaseItem } from './PurchaseItem';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  food:FoodBoxModel;
  public cartItemList:FoodBoxModel[]=[];
  public foodList = new BehaviorSubject<any>([]);
  totalPrice:number;

 
  
    
    
  
 
  purchaseItem: PurchaseItem ;
  purchasesItems:PurchaseItem[];
  user:User;
  purchase: Purchase;
   



  constructor( private purchaseService: PurchaseService , purchaseItemService: PurchaseItemService    ) { 
    
  }
  addToCart(food:FoodBoxModel){
    this.cartItemList.push(food);
    this.foodList.next(this.cartItemList);
    this.getTotalPrice(); 
    
  }
  getFood(){
    return this.foodList.asObservable();
    
  }
  getTotalPrice() :number{
    let grandTotal = 0;
    this.cartItemList.map((a:FoodBoxModel)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }
  resetCart(){
    this.cartItemList=[];
    this.foodList.next(this.cartItemList);
    this.getTotalPrice(); 
  }

/* purchaseFood():void{
   let purchase:Purchase;
   let purchaseItem: PurchaseItem;

   purchase.user=this.user;


  purchase.totalcost=this.totalPrice;
   this.purchase.purchaseItems=[];
  for(let f of this.cartItemList ){
     
    purchaseItem.food=f;
    purchaseItem.quantity=1;
    purchase.purchaseItems.push(purchaseItem);
  }
  this.purchaseService.save(purchase).subscribe(res =>{
    this. cartItemList=[];
    this.foodList.next(this.cartItemList);
    this.getTotalPrice(); 
  
  })
}*/




}
