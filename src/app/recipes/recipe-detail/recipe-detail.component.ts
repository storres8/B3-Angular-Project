import { Component, OnInit, Input } from "@angular/core";

import { Recipe } from "../recipe.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit() {}

  toShoppingService() {
    // You could do it this way but you emit to many events since you call .addIngredient for each
    // ingredient that you are adding.
    // this.recipe.ingredients.forEach(ingredient => {
    //   this.shoppingService.addIngredient(ingredient);
    //   return;
    // });

    // A better way that only emits once after adding all ingredients
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }
}
