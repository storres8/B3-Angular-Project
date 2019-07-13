import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  constructor() {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel",
      "A super-tasty Schnitzel - just awesome!",
      "https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Big Fat Burger",
      "What else do you need to say?",
      "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/07/best-black-bean-burgers-2.jpg",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
