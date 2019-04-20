import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app.rounting.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrandComponent } from './shared/brand/brand.component';
import { LogsComponent } from './shared/logs/logs.component';
import { NotificationsComponent } from './shared/notifications/notifications.component';
import { UserSettingsComponent } from './shared/user-settings/user-settings.component';
import { AddTaskFormComponent } from './shared/add-task-form/add-task-form.component';
import { ListTaskComponent } from './shared/list-task/list-task.component';
import { ListMapComponent } from './shared/list-map/list-map.component';
import { MapComponent } from './shared/map/map.component';
import { InitPanelComponent } from './shared/init-panel/init-panel.component';
import { UserProfileComponent } from './shared/user-profile/user-profile.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { InitPanelPageComponent } from './pages/init-panel/init-panel-page.component';
import { MapPageComponent } from './pages/map/map-page.component';
import { ListMapPageComponent } from './pages/list-map/list-map-page.component';
import { MyListPageComponent } from './pages/my-list/my-list-page.component';
import { MyProfilePageComponent } from './pages/my-profile/my-profile-page.component';
import { UserProfilePageComponent } from './pages/user-profile/user-profile-page.component';
import { HomeComponent } from './shared/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { AssignedTaskComponent } from './shared/assigned-task/assigned-task.component';
import { environment } from 'src/environments/environment';
import { MyProfileComponent } from './shared/my-profile/my-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandComponent,
    LogsComponent,
    NotificationsComponent,
    UserSettingsComponent,
    AddTaskFormComponent,
    LoginComponent,
    RegisterComponent,
    ListTaskComponent,
    ListMapComponent,
    MapComponent,
    AssignedTaskComponent,
    InitPanelComponent,
    MyProfileComponent,
    UserProfileComponent,
    HomeComponent,
    FooterComponent,
    HomePageComponent,
    InitPanelPageComponent,
    MapPageComponent,
    ListMapPageComponent,
    MyListPageComponent,
    MyProfilePageComponent,
    UserProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.maps_api
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent,
    RegisterComponent,
    AddTaskFormComponent,
    AssignedTaskComponent
  ]
})
export class AppModule { }
