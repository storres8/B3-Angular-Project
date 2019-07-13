import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";

const appRoutes: Routes = [
  // we all the pathMatch:'full' parameter to the object where we are redirecting b/c we want to make sure
  // that we are mathing a full path that is soley blank.
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [{ path: "", component: RecipeStartComponent }]
  },
  { path: "shopping-list", component: ShoppingListComponent }
];

// adding the ngModule transforms this component from a class to an angular module.
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
