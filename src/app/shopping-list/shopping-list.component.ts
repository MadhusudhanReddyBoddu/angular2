import { Component, OnInit } from '@angular/core';

import { Ingrediants } from '../shared/ingrediants.model'
import { ShoppingListService } from './shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediants[];

  constructor(private slService: ShoppingListService) { }
  
  ngOnInit() {
    this.ingrediants = this.slService.getIngrediants();
    this.slService.ingrediantsChanged
      .subscribe(
        (ingrediants:Ingrediants[]) => {
          this.ingrediants =ingrediants;
        }
      );
  }

}
