import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input()
  recipeItem : Recipe;

  constructor(private recipeService : RecipeService){

  }

  // @Output() recipeEmitter = new EventEmitter<void>();

  onRecipeClick(event : MouseEvent){
    event.preventDefault();
    // alert("recipe item emit")
    // this.recipeEmitter.emit();
    this.recipeService.recipeEmitByService.emit(this.recipeItem);
  }
}
