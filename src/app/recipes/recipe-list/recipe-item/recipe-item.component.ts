import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input()
  recipeItem : Recipe;

  @Output() recipeEmitter = new EventEmitter<void>();

  onRecipeClick(event : MouseEvent){
    event.preventDefault();
    // alert("recipe item emit")
    this.recipeEmitter.emit();
  }
}
