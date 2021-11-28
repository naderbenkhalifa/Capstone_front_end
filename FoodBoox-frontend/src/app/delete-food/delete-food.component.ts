import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodBoxModel } from '../food-box-model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-delete-food',
  templateUrl: './delete-food.component.html',
  styleUrls: ['./delete-food.component.css']
})
export class DeleteFoodComponent implements OnInit {

  private food:FoodBoxModel;
  private id:number;
  constructor(private foodService:FoodService, private router:Router) {
    this.food=new FoodBoxModel(); 
   }

   public deleteFood(id:number):void{
     this.foodService.deleteFood(id).subscribe(res=>{
      this.router.navigate(['/foodsList']);

     });
     
    
    }
  ngOnInit() {
    

     }

  }


