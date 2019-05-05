import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyProfileService } from "../../services/my-profile.service";

@Component ({
  selector: 'app-list-map',
  templateUrl: 'list-map.component.html',
  styleUrls: ['list-map.component.scss'],
})

export class ListMapComponent implements OnInit {

  constructor(private httpClient: HttpClient, private myProfileService: MyProfileService) {}

  users: any[] = [];

  getAllProfiles(): void{
    this.myProfileService.getAllProfiles().then((users: any)=> {
      this.users = users;
    });
  }

  ngOnInit() {
    this.getAllProfiles();
  }

}
