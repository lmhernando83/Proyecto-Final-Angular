import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { InitPanelPageComponent } from './pages/init-panel/init-panel-page.component';
import { MapPageComponent } from './pages/map/map-page.component';
import { MyListPageComponent } from './pages/my-list/my-list-page.component';
import { MyProfilePageComponent } from './pages/my-profile/my-profile-page.component';
import { UserProfilePageComponent } from './pages/user-profile/user-profile-page.component';
import { ListMapPageComponent } from './pages/list-map/list-map-page.component';


const routes: Routes = [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'init-panel',
        component: InitPanelPageComponent,
      },
      {
        path: 'map',
        component: MapPageComponent,
      },
      {
        path: 'list-map',
        component: ListMapPageComponent,
      },
      {
        path: 'my-list',
        component: MyListPageComponent,
      },
      {
        path: 'my-profile',
        component: MyProfilePageComponent,
      },
      {
        path: 'profile/:id',
        component: UserProfilePageComponent,
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

