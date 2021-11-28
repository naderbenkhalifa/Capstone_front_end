import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodBoxModel } from '../food-box-model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-found',
  templateUrl: './food-found.component.html',
  styleUrls: ['./food-found.component.css']
})
export class FoodFoundComponent implements OnInit {
 private food:FoodBoxModel;
 private id :number=null;
 private message:string;

  
  constructor(private foodService: FoodService,private route: ActivatedRoute) {}

  ngOnInit() {

    this.id=this.route.snapshot.params.idFood;
    console.log("FoodFoundComponent:ngOnInit: id="+this.id);
    if(this.id!=null){
    this.foodService.getFoodById(this.id).subscribe(res=>{
      this.food=res;
    },
    error=>{ this.message="food not found" 
      
     });
    }
  }
}
  
   
  




