import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyProfileService } from "../../services/my-profile.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.scss'],
})

export class UserProfileComponent{

  constructor(private httpClient: HttpClient, private myProfileService: MyProfileService) {}

  users: any[] = [];

  getUser(id): void{
    this.myProfileService.getUser(id).then((users: any)=> {
      this.users = users;
    });
  }

}
