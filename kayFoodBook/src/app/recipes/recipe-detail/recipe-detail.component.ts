import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../recipe.service";
import {RecipeModel} from "../../shared/models/recipe.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipeSelected?: RecipeModel;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipesSelected.subscribe(recipe => {
        this.recipeSelected = new RecipeModel(recipe.id,recipe.name, recipe.description, recipe.imagePath, recipe.ingredients);
    });
    this.route.params.subscribe((params:Params) => {
      if(params){
        this.recipeSelected = this.recipeService.getRecipeById(+params['id']);
      }
    });
  }

  onSendToShoppingList():void {
    if(this.recipeSelected){
      this.recipeService.addIngredients(this.recipeSelected.ingredients);
    }
  }

}
