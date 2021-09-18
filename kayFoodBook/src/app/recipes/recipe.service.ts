import {RecipeModel} from "../shared/models/recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {IngredientModel} from "../shared/models/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  private recipes: RecipeModel[] = [new RecipeModel(
    1,
    'Com Chien',
    'Com chien ga nuoc mam',
    'http://imgs.vietnamnet.vn/Images/2016/12/09/08/20161209085123-ga3.jpg',
    [
      new IngredientModel("Gao tam", 10),
      new IngredientModel("Nuoc mam ca com", 1)],
  ),
    new RecipeModel(
      2,
      'Hu tieu',
      'Hu tieu nam vang',
      'https://i.ytimg.com/vi/fziqSn-xkws/maxresdefault.jpg',
      [new IngredientModel("Gio heo", 2),
        new IngredientModel("Tom chi", 4)])
  ];
  recipesSelected: EventEmitter<RecipeModel> = new EventEmitter<RecipeModel>();
  constructor(private shoppingListService: ShoppingListService) {
  }
  getRecipes(): RecipeModel[] {
    return this.recipes.slice();
  }

  getRecipeById(id: number): RecipeModel {
    return <RecipeModel> this.recipes.find(item => item.id === +id);
  }

  addIngredients(ingredients: IngredientModel[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
