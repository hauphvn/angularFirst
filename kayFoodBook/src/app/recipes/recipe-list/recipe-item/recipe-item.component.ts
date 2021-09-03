import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../../shared/models/recipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipes: RecipeModel[] =[];
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(recipe: RecipeModel){
    this.recipeService.recipesSelected.emit(recipe);
  }

}
