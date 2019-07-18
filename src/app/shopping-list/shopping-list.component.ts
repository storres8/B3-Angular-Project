import { Component, OnInit, OnDestroy } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    // this sets ingredients to the basic prefilled array
    this.ingredients = this.shoppingListService.getIngredients();

    // this injected property from our service is subscribed to the ingredientsChanged event.
    // By subscrbing to the ingredientsChanged event we are reciving what the event is emiting,
    // everytime there is a new emition of the event. In this case we emit a new array of ingredients
    // from the shopping-list service whenever we add a new ingridient into the array. This new array
    // of ingridients is then sent here since we are subscribed and we then set the ingredients
    // property of this component equal to the newly emmited array of ingredients.
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    console.log(this.ingredients);
  }

  onEditItem(index: number) {
    // passing on the index of the ingredient that we click to the shopping list service through a
    // subject, which will eventually get sent to the shopping-list edit componet.
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
