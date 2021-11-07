import {Component, OnInit} from '@angular/core';
import {IngredientModel} from "../../shared/models/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(f: NgForm) {
    const nameInput = f.value.name;
    const amountInput = f.value.amount;
    this.shoppingListService.addNewIngredient(new IngredientModel(nameInput, amountInput));
  }
}
