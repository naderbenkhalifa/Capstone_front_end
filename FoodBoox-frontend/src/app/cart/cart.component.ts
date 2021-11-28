import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartServiceService } from '../cart-service.service';
import { FoodBoxModel } from '../food-box-model';
import { Purchase } from '../Purchase';
import { PurchaseItemService } from '../purchase-item.service';
import { PurchaseService } from '../purchase.service';
import { PurchaseItem } from '../PurchaseItem';
import { User } from '../user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private food:FoodBoxModel;
  public cartItemList:FoodBoxModel[]=[]
  totalPrice: number;
  purchase: Purchase;
  user:User;
  
  public foodList = new BehaviorSubject<any>([]);

  constructor(private cartService: CartServiceService ,private purchaseService: PurchaseService, private purchaseItemService:  PurchaseItemService) { }

  ngOnInit() {
    this.cartService.getFood().subscribe(res=>
      {
    
      this.cartItemList=res;
      this.totalPrice=this.cartService.getTotalPrice();
    })
    
  }
  purchaseFood():void{
    let newPurchase:Purchase={};
    newPurchase.user=this.user;
    let currentDate = new Date();
    newPurchase.dateOfPurchase=currentDate.toISOString();
    newPurchase.totalcost=this.totalPrice;
    newPurchase.purchaseItems=[];
    for(let p of this.cartItemList){
      let purchaseItem: PurchaseItem={};
     
      purchaseItem.food=p;
      purchaseItem.quantity=1;
      newPurchase.purchaseItems.push(purchaseItem)

    }
    this.purchaseService.save(newPurchase).subscribe(res =>{
      this.cartService.resetCart();
    });
   
   
 
   
  }
 
 
 
 


}
