import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { MyProfileService } from "../../services/my-profile.service";

@Component({
  selector: 'app-user-settings',
  templateUrl: 'user-settings.component.html',
  styleUrls: ['user-settings.component.scss'],
})

export class UserSettingsComponent implements OnInit {

  constructor(
    private router: Router,
    private myProfileService: MyProfileService) {
  }

  dropdownOpen: boolean = false;
  users: UserModel;

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
  }
}

