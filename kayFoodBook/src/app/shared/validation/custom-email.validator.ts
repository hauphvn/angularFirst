import {AbstractControl, ValidationErrors} from "@angular/forms";
import {Observable, of} from "rxjs";

export function pwError(control: AbstractControl) : Observable<ValidationErrors> | Observable<null> {
  const value = control.value;
  if(value === 'hauphvn@gmail.com') {
    return of({'pwError': true, 'requiredValue': 'Do not use simple PW'});
  }
   return of(null);
}

export function nameError(control: AbstractControl) : Observable<ValidationErrors> | Observable<null> {
  if(control.value === 'hauphvn') {
    return of({'nameError': true, 'requiredValue': 'Do not use this name'});
  }
  return of(null);
}
