import { Component, OnInit, OnDestroy } from "@angular/core";

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
  edittedItemIndex: number;
  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnInit() {
    this.indexSubscription = this.shoppinglistService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.edittedItemIndex = index;
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppinglistService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.indexSubscription.unsubscribe();
  }
}
