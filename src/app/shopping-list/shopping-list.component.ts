import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients : Ingredient[];

  constructor(private shoppinglistservice : ShoppingListService){
  }

  ngOnInit(){
    this.ingredients = this.shoppinglistservice.getIngredientsFromListByService();
    this.shoppinglistservice.newIngredient.subscribe(
      (item : Ingredient[]) => {
        this.ingredients = item;
      }
    )
  }
}
