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

  user: any[] = [];

  getUser(id): void{
    debugger
    this.myProfileService.getUser(id).then((user: any)=> {
      this.user = user;
    });
  }

}
