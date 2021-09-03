import {Component, OnInit} from '@angular/core';
import {IngredientModel} from "../shared/models/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged.subscribe((ingredients: IngredientModel[]) => {
      if (ingredients) {
        this.ingredients = ingredients;
      }
    });
  }
}
