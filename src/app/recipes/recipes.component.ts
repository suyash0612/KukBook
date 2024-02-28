import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent {
  selectedRecipe : Recipe;
  // event : any;

  constructor(private recipeService : RecipeService){
  }

  ngOnInit(){
    this.recipeService.recipeEmitByService.subscribe(
      (recipe : Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

  getRecipe(recipe : any){
    this.selectedRecipe = recipe;
  }
}
