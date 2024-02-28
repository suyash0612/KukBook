import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    newIngredient = new EventEmitter<Ingredient[]>();

    private ingredients : Ingredient[] = [
        new Ingredient('boneless chicken',6),
        new Ingredient('soyabean',50),
        new Ingredient('misal',130)
      ];

    addIngredientToListByService(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.newIngredient.emit(this.ingredients.slice());

    }
    getIngredientsFromListByService(){
        return this.ingredients.slice();
    }
}