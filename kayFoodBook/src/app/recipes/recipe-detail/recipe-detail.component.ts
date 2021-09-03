import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../recipe.service";
import {RecipeModel} from "../../shared/models/recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipeSelected?: RecipeModel;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipesSelected.subscribe(recipe => {
        this.recipeSelected = new RecipeModel(recipe.name, recipe.description, recipe.imagePath, recipe.ingredients);
    });
  }

  onSendToShoppingList():void {
    if(this.recipeSelected){
      this.recipeService.addIngredients(this.recipeSelected.ingredients);
    }
  }

}
