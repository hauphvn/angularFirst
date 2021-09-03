import {IngredientModel} from "../shared/models/ingredient.model";
import {EventEmitter, Injectable} from "@angular/core";

export class ShoppingListService {
  private ingredients: IngredientModel[] = [
    new IngredientModel('Com trang', 5),
    new IngredientModel('Ga ta', 1)
  ];
  ingredientChanged = new EventEmitter<IngredientModel[]>();
  getIngredients(): IngredientModel[] {
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientModel[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
