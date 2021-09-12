import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductsResolverService} from "./services/productsResolver/products-resolver.service";
import {AboutComponent} from "./components/about/about.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'products',
    component: ProductsComponent,
    resolve: {products: ProductsResolverService}
  },
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
