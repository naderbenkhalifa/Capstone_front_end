import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { FoodBoxModel } from '../food-box-model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-foods-list',
  templateUrl: './foods-list.component.html',
  styleUrls: ['./foods-list.component.css']
})
export class FoodsListComponent implements OnInit {
  public cartItemList:FoodBoxModel[]=[];
private food:FoodBoxModel;
  private foodsList: FoodBoxModel[];
  totalPrice: number;
  totalItem: any;
  constructor(private foodService: FoodService,private cartService: CartServiceService,private route: Router ) { }
  

  ngOnInit() {
    this.foodService.getAllFoods().subscribe(res => { this.foodsList = res; });
     
    
  }
  addToCart(food) {
    this.cartService.addToCart(food);
    this.route.navigate(['/cart'])
  }


}
