import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from "../../shared/models/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName', {static: false}) nameInputRef?: ElementRef;
  @ViewChild('inputAmount',{static: false}) amountInputRef?: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient($event: MouseEvent) {
    const nameInput = this.nameInputRef?.nativeElement.value;
    const amountInput = this.amountInputRef?.nativeElement.value;
    this.shoppingListService.addNewIngredient(new IngredientModel(nameInput, amountInput));

  }
}
