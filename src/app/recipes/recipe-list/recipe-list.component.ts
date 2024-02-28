import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{
  
  recipes : Recipe[] = [
    new Recipe('Chicken Biryani','A rice dish made using chicken','https://wallpaperaccess.com/full/1972889.jpg'),
    new Recipe('Soya Chap','A soya dish made using soyabean','https://i.ytimg.com/vi/FWMduyzK8Rw/maxresdefault.jpg'),
    new Recipe('Misal Pav','A combo dish made using lentils','https://i1.wp.com/ahappytreat.com/wp-content/uploads/2019/03/DSC_0583.jpg?w=1920&ssl=1'),
  ];


  @Output()  recipeEmitterP = new EventEmitter<Recipe>();

  constructor(){
  }
  
  onRecipeSelected(recipe : Recipe){
    alert("recipe list emit")
    this.recipeEmitterP.emit(recipe);
  }
}
