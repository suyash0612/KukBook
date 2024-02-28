import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Chicken Biryani', 'A rice dish made using chicken', 'https://wallpaperaccess.com/full/1972889.jpg'),
        new Recipe('Soya Chap', 'A soya dish made using soyabean', 'https://i.ytimg.com/vi/FWMduyzK8Rw/maxresdefault.jpg'),
        new Recipe('Misal Pav', 'A combo dish made using lentils', 'https://i1.wp.com/ahappytreat.com/wp-content/uploads/2019/03/DSC_0583.jpg?w=1920&ssl=1'),
    ];

    getRecipes(){
        return this.recipes.slice();
    }

    recipeEmitByService : EventEmitter<Recipe> = new EventEmitter<Recipe>();
}