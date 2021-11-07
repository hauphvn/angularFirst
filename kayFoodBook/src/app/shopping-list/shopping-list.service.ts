import {IngredientModel} from "../shared/models/ingredient.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Subject} from "rxjs";

export class ShoppingListService {
  private ingredients: IngredientModel[] = [
    new IngredientModel('Com trang', 5),
    new IngredientModel('Ga ta', 1)
  ];
  ingredientChanged: Subject<IngredientModel[]> = new Subject<IngredientModel[]>();
  clickedIngredient: Subject<number> = new Subject<number>();
  getIngredients(): IngredientModel[] {
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientModel[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  getIngredientByIndex(index: number): IngredientModel {
     return this.ingredients[index];
  }

  updateIngredient(index: any, ingredientModel: IngredientModel) {
    this.ingredients[index] = ingredientModel;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(indexClicked: number) {
    if(indexClicked > -1) {
      this.ingredients.splice(indexClicked, 1);
      this.ingredientChanged.next(this.ingredients.slice());
    }
  }
}
