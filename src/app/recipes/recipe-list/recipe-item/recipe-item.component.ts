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
    // recipe-item component. This from this component we are emitting a specific recipe
    // that we have selected.
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
