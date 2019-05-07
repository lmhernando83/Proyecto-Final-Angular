import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyProfileService } from "../../services/my-profile.service";
import { Router } from '@angular/router';

@Component ({
  selector: 'app-list-map',
  templateUrl: 'list-map.component.html',
  styleUrls: ['list-map.component.scss'],
})

export class ListMapComponent implements OnInit {

  constructor(private httpClient: HttpClient, private myProfileService: MyProfileService, private router: Router) {}

  users: any[] = [];

  getAllProfiles(): void{
    this.myProfileService.getAllProfiles().then((users: any)=> {
      this.users = users;
    });
  }

  navigate(id){
    console.log(id);
    this.router.navigate(['profile', id])
  }

  ngOnInit() {
    this.getAllProfiles();
  }

}
