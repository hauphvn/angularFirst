import {IngredientModel} from "./ingredient.model";

export class RecipeModel{
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: IngredientModel[];

  constructor(id: number, name: string, desc: string, imgPath: string, ingredients: IngredientModel[]) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
    this.ingredients = ingredients;
  }
}
