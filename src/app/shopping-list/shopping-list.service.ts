import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  constructor() {}

  // this is for rendering the first ingridients that we already have. It does not update.
  getIngredients() {
    return this.ingredients.slice();
  }

  // Upon adding a new ingredient we re-copy our ingredients array and send as an event to the
  // shopping-list component this new updated ingridient array to be rendered. That way our
  // original array does not get mutated directly.
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
