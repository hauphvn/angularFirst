import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ServersComponent} from './servers/servers.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthGuardService} from "./auth-guard-serivce";
import {AuthService} from "./auth.service";
import {CanDeactivateGuard} from "./can-deactive-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService, AuthService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
