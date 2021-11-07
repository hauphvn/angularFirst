import {Component, OnInit, ViewChild} from '@angular/core';
import {IngredientModel} from "../../shared/models/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f', {static: false}) f!: NgForm;
  editMode = false;
  indexClicked = -1;
  itemClicked!: IngredientModel;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.shoppingListService.clickedIngredient.subscribe((index: number) => {
      if (index >= 0) {
        this.indexClicked = index;
        this.itemClicked = this.shoppingListService.getIngredientByIndex(index);
        this.f.setValue({'name': this.itemClicked.name, 'amount': this.itemClicked.amount});
        this.editMode = true;
      }
    });
  }

  onSubmit(f: NgForm) {
    const nameInput = f.value.name;
    const amountInput = f.value.amount;
    if (this.editMode && this.indexClicked > -1) {
      this.shoppingListService.updateIngredient(this.indexClicked, new IngredientModel(nameInput, amountInput));
    } else {
      this.shoppingListService.addNewIngredient(new IngredientModel(nameInput, amountInput));
    }
    this.reset();
  }

  reset() {
    this.indexClicked = -1;
    this.editMode = false;
    this.f.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.indexClicked);
    this.reset();
  }
}
