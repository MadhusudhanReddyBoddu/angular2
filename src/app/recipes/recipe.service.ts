import { EventEmitter } from '@angular/core'
import {Recipe} from './recipe.model'
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[]=[
        new Recipe("a test recipe","simple test","https://static01.nyt.com/images/2016/06/28/dining/28COOKING-FRIEDCHICKENGUIDE13/28COOKING-FRIEDCHICKENGUIDE13-superJumbo.jpg"),
        new Recipe("second test recipe","simple test","https://static01.nyt.com/images/2016/06/28/dining/28COOKING-FRIEDCHICKENGUIDE13/28COOKING-FRIEDCHICKENGUIDE13-superJumbo.jpg")
        
     ];

     getRecipes(){
         return this.recipes.slice();
     }
}