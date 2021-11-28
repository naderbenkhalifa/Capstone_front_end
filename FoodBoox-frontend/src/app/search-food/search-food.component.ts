import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodBoxModel } from '../food-box-model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.css']
})
export class SearchFoodComponent implements OnInit {
foodList:FoodBoxModel[];
  private food:FoodBoxModel;
  private id:number;
  
  constructor(private foodService:FoodService, private router:Router) {
    this.food=new FoodBoxModel();
   }

  
   public getFoodById(id:number){
     console.log("getFoodById: id="+id);
     this.router.navigate(['/foodFound',id]);
     /*
    this.foodService.getFoodById(this.id).subscribe(res=>{
      console.log("getFoodById: res="+res);
      this.food=res;    
  });
  */
}
   
  
  ngOnInit() {
  }

}
