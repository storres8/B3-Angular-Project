import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Router } from "@angular/router";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipesService: RecipeService,
    // Router used to access navigate
    private router: Router,
    // ActivatedRoute used to activate the current route that you are in.
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const recipeList = this.recipesService.getRecipes();
    this.recipes = recipeList;
  }

  handleNew() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
