import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { MyProfileService } from "../../services/my-profile.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-settings',
  templateUrl: 'user-settings.component.html',
  styleUrls: ['user-settings.component.scss'],
})

export class UserSettingsComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private myProfileService: MyProfileService) {
  }

  dropdownOpen: boolean = false;
  users: UserModel;
  destroy: Subscription;

  toogleClass(){
    this.dropdownOpen = !this.dropdownOpen;
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getMyProfile(): void{
    this.myProfileService.getMyProfile().then((users: any)=> {
      this.users = users;
    });
  }

  ngOnInit() {
    this.getMyProfile();
    this.destroy = this.myProfileService.avatar.subscribe(val => {
      if(val) {
        this.users.image = val;
      }
    })
  }

  ngOnDestroy(){
    if (this.destroy) {
      this.destroy.unsubscribe();
    }
  }
}

