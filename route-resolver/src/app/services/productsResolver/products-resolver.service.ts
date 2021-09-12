import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {ProductService} from "../product/product.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<any>{
  constructor(
    private product: ProductService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called get product in resolver...', route);
    return this.product.getProducts().pipe(
      catchError(err => {
        return of('No data');
      })
    );
  }
}
