import { Component, OnInit, Input } from "@angular/core";

import { Recipe } from "../../recipe.model";
import { RecipeService } from "../../recipe.service";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onSelected() {
    // We are emitting a method from our recipe service component inside our
    // recipe-item component. This from this component we are emitting the specific recipe
    // that we have selected when clicking from the list of recipes in the DOM.
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
