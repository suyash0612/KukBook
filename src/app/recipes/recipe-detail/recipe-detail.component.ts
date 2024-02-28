import { AfterViewChecked, Component, Input, OnChanges } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent{
  @Input()
  getRecipe : Recipe;

  toggleManageDropdown(){}
  
}
