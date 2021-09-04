import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ServersComponent} from './servers/servers.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {Routes, RouterModule} from '@angular/router';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    component: PageNotFoundComponent
  }
];

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
