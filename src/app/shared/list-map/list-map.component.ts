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
      this.users.forEach((user,index) => {
        if(index === 0) {
          user.dist = '200mt';
        } else if(index === 1) {
          user.dist = '250mt';
        }else if(index === 2) {
          user.dist = '300mt';
        }else if(index === 3) {
          user.dist = '400mt';
        }else if(index === 4) {
          user.dist = '450mt';
        }else if(index === 5) {
          user.dist = '500mt';
        }else if(index === 6) {
          user.dist = '600mt';
        }else if(index === 7) {
          user.dist = '900mt';
        }
      })
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
