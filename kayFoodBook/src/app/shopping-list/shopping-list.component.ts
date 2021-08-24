import { Component, OnInit } from '@angular/core';
import {IngredientModel} from "../shared/models/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel('Com trang',5),
    new IngredientModel('Ga ta',1)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
