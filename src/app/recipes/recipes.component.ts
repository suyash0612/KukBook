import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe : Recipe;
  // event : any;

  constructor(){
    console.log(this.selectedRecipe)
  }

  getRecipe(recipe : any){
    alert("recipe parent emit")
    this.selectedRecipe = recipe;
  }
}
