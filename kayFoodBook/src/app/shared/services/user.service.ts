import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {User, users} from "../models/users";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {
  }

  getByEmail(email: string): Observable<User | undefined> {
    const user = users.find(user => user.email === email);
    return of(user).pipe(delay(500));
  }
}
