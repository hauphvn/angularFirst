import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {ServersComponent} from "./servers/servers.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {ServerComponent} from "./servers/server/server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuardService} from "./auth-guard-serivce";
import {CanDeactivateGuard} from "./can-deactive-guard.service";
import {ErrorPageComponent} from "./error-page/error-page.component";


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path:':id/:name',
        component: UserComponent
      }
    ]
  },
  {
    path:'servers',
    canActivateChild:[AuthGuardService],
    component: ServersComponent,
    children: [
      {
        path: ':id/edit',
        component: EditServerComponent
      },
      {
        path: ':id/:name',
        component: ServerComponent,
        children: [
          {
            path: 'edit',
            canDeactivate: [CanDeactivateGuard],
            component: EditServerComponent
          }
        ]
      },
    ]

  },
  {
    path:'**',
    redirectTo:'/not-found'
  },
  {
    path: 'not-found',
    // component: PageNotFoundComponent
    component: ErrorPageComponent,
    data: {message: '404 Error!'}
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
