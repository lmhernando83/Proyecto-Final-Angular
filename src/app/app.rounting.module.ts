import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { InitPanelPageComponent } from './pages/init-panel/init-panel-page.component';
import { MapPageComponent } from './pages/map/map-page.component';
import { MyListPageComponent } from './pages/my-list/my-list-page.component';
import { MyProfilePageComponent } from './pages/my-profile/my-profile-page.component';
import { UserProfilePageComponent } from './pages/user-profile/user-profile-page.component';
import { ListMapPageComponent } from './pages/list-map/list-map-page.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'init-panel',
        component: InitPanelPageComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'map',
        component: MapPageComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'list-map',
        component: ListMapPageComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'my-list',
        component: MyListPageComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'my-profile',
        component: MyProfilePageComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'profile/:id',
        component: UserProfilePageComponent,
        canActivate: [LoginGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
      },
      {
        path: '**',
        redirectTo: ''
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

