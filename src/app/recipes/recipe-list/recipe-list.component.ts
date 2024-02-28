import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers:[]
})
export class RecipeListComponent{
  
  recipes : Recipe[];

  @Output()  recipeEmitterP = new EventEmitter<Recipe>();

  constructor(private recipeService : RecipeService){
  }

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }
  
  onRecipeSelected(recipe :Recipe){
    // alert("recipe list emit")
    this.recipeEmitterP.emit(recipe);
  }
}
