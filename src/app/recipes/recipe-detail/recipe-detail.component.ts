import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private shoppingService: ShoppingListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((newParams: Params) => {
      this.id = +newParams["id"];
    });
  }

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
