import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients : Ingredient[] = [
    new Ingredient('boneless chicken',6),
    new Ingredient('soyabean',50),
    new Ingredient('misal',130)
  ];

  constructor(){

  }
  appendIngredientToList(item : Ingredient){
    this.ingredients.push(item);
  }
}
