import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../../shared/models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [new RecipeModel(
    'Com Chien',
    'Com chien ga nuoc mam',
    'http://imgs.vietnamnet.vn/Images/2016/12/09/08/20161209085123-ga3.jpg'),
    new RecipeModel(
      'Hu tieu',
      'Hu tieu nam vang',
      'https://i.ytimg.com/vi/fziqSn-xkws/maxresdefault.jpg')];
  constructor() { }

  ngOnInit(): void {
  }

}
