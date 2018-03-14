import { Component, OnInit,Output,ViewChild,EventEmitter,ElementRef } from '@angular/core';

import { Ingrediants } from '../../shared/ingrediants.model'
import { ShoppingListService } from '../shopping-list.service'


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  
  constructor(private slService:ShoppingListService) { }
 
  ngOnInit() { 
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    
    const newIngrediants = new Ingrediants(ingName,ingAmount);
    
    this.slService.addIngredient(newIngrediants);
  }

}
