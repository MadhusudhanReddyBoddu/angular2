import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
