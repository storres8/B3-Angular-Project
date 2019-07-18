import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  indexSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  @ViewChild("f", { static: false }) slForm: NgForm;

  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnInit() {
    this.indexSubscription = this.shoppinglistService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppinglistService.getIngredient(index);

        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onSubmitItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.shoppinglistService.updateIngredient(
        this.editedItemIndex,
        newIngredient
      );
      this.editMode = false;
      this.slForm.reset();
    } else {
      this.shoppinglistService.addIngredient(newIngredient);
      this.slForm.reset();
    }
  }

  onClear() {
    this.slForm.setValue({
      name: "",
      amount: null
    });
    this.editMode = false;
  }

  ngOnDestroy() {
    this.indexSubscription.unsubscribe();
  }
}
