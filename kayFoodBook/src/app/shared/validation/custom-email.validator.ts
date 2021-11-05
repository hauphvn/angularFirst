import {AbstractControl, ValidationErrors} from "@angular/forms";
import {Observable, of} from "rxjs";

export function emailError(control: AbstractControl) : Observable<ValidationErrors> | Observable<null> {
  const value = control.value;
  if(value === 'hauphvn@gmail.com') {
    return of({'emailError': true, 'requiredValue': 'Do not use this email'});
  }
   return of(null);
}

export function nameError(control: AbstractControl) : Observable<ValidationErrors> | Observable<null> {
  if(control.value === 'hauphvn') {
    return of({'nameError': true, 'requiredValue': 'Do not use this name'});
  }
  return of(null);
}

export function pwError(control: AbstractControl): Promise<any> | Observable<any> {
  const promise = new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if(control.value === '123'){
        resolve({'passwordError': true, 'requiredValue': 'Your password too simple'});
      }else{
        resolve(null);
      }
    },2000);
  });
  return promise;
}
