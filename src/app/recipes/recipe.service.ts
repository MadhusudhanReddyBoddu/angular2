import { EventEmitter, Injectable } from '@angular/core'
import {Recipe} from './recipe.model'
import { Ingrediants } from '../shared/ingrediants.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[]=[
        new Recipe(
            "tasty Schnitzel",
            "super tasty just awesome",
            "https://static01.nyt.com/images/2016/06/28/dining/28COOKING-FRIEDCHICKENGUIDE13/28COOKING-FRIEDCHICKENGUIDE13-superJumbo.jpg",
            [
                new Ingrediants('meat',1),
                new Ingrediants('French Fries',20)
                
            ]),
        new Recipe(
            "samosa",
            "hot and spicy",
            "https://static01.nyt.com/images/2016/06/28/dining/28COOKING-FRIEDCHICKENGUIDE13/28COOKING-FRIEDCHICKENGUIDE13-superJumbo.jpg",
            [
                new Ingrediants('floor',2),
                new Ingrediants('aloo',2)
                
            ]
        )

        
     ];

     constructor(private slService: ShoppingListService){}

     getRecipes(){
         return this.recipes.slice();
     }
     addIngredientsToShoppingList(ingrediants:Ingrediants[]){
         this.slService.addIngredients(ingrediants)
     }
}