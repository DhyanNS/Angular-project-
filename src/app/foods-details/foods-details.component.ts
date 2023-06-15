import { Component, OnInit } from '@angular/core';
import { FoodService} from '../services/food/food.service';
import {FoodsService} from '../services/food/foods.service';
import { IFoods } from '../Foods';


@Component({
  selector: 'app-foods-details',
  templateUrl: './foods-details.component.html',
  styleUrls: ['./foods-details.component.css']
})
export class FoodsDetailsComponent implements OnInit{
  // selectedOption:string='Select an option';
  // def :string="select a option"

  public foods:any[]=[];
  deletedId:number=0;
  id:number=0

  newFood: IFoods = {
    Foodname:'',
    Foodprice:0,
    FoodType:''
  };
  uFood: IFoods = {
    Foodname:'',
    Foodprice:0,
    FoodType:''
  }
 
  constructor(private _FoodsService:FoodsService){}
  ngOnInit(): void {
    console.log("Hello i am from OnIt!!");
    this._FoodsService.getFoods().subscribe(data => {
      this.foods = data});
    }

    deleteFood(){
      this._FoodsService.deleteFood(this.deletedId).subscribe(data => {alert("Hotel Deleted")});
    }
    addNewFood(){
      this._FoodsService.addFood(this.newFood).subscribe(hotel => {alert("Hotel Room Added")});
    }
    updateNFood(){
      console.log("Inside Update Function")
      this._FoodsService.updateFood(this.id,this.uFood).subscribe(data => {alert("Data Updated")});
    }

}
