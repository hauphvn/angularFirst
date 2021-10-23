import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {LoginComponent} from "./learning/template-drive-form/login/login.component";
import {LoginReactiveComponent} from "./learning/reactive-form/login-reactive/login-reactive.component";
import {LoginDemoComponent} from "./login/login-demo.component";

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
      {path:'', component: RecipeStartComponent},
      {path:'new', component: RecipeEditComponent},
      {path:':id', component: RecipeDetailComponent},
      {path:':id/edit', component: RecipeEditComponent}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path:'template-form', component: LoginComponent},
  {path:'reactive-form', component: LoginReactiveComponent},
  {path:'login-form', component: LoginDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
