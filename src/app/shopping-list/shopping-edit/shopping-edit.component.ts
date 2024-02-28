import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput')
  nameRef : ElementRef;

  @ViewChild('amountInput')
  amountRef : ElementRef;

  constructor(private shoppingservice : ShoppingListService){
  }

  // @Output()
  // ingredientEmiter = new EventEmitter<Ingredient>();

  addIngredients(event : MouseEvent){
    event.preventDefault();
    const itemName = this.nameRef.nativeElement.value;
    const itemAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(itemName,itemAmount); 
    // this.ingredientEmiter.emit(newIngredient);
    this.shoppingservice.addIngredientToListByService(newIngredient);
  }
}
