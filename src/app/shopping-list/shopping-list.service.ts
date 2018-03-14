import { Ingrediants } from '../shared/ingrediants.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingrediantsChanged = new EventEmitter<Ingrediants[]>();
    private ingrediants: Ingrediants[]=[
        new Ingrediants('Apples',5),
        new Ingrediants('Tamatoes',15)
        
      ];

      getIngrediants(){
          return this.ingrediants.slice();
      }

      addIngredient(ingredient:Ingrediants){
        this.ingrediants.push(ingredient);
        this.ingrediantsChanged.emit(this.ingrediants.slice());
      }
      addIngredients(ingrediants: Ingrediants[]){
        //   for (let ingredient of ingrediants){
        //       this.addIngredient(ingredient);
        //   }
        this.ingrediants.push(...ingrediants);
        this.ingrediantsChanged.emit(this.ingrediants.slice());
      }

}