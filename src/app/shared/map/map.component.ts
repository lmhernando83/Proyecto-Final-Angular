import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyProfileService } from "../../services/my-profile.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss'],
})

export class MapComponent implements OnInit{

  constructor(private httpClient: HttpClient, private myProfileService: MyProfileService,  private router: Router) {}

  lat: number;
  lng: number;
  show;

  users: any[] = [];
  user: any[] = [];
  /*users: any[] = [
  {
    id: 1,
    name: 'lmhernando83',
    image: 'http://lorempixel.com/30/30',
    url: 'profile/user._id',
    lat: 40.391260,
    lng: -3.695460,
  },{
    id: 2,
    name: 'lucho666',
    image: 'http://lorempixel.com/30/30',
    url: 'profile/user._id',
    lat: 40.406300,
    lng: -3.693540,
  }
];*/

  getAllProfiles(): void{
    this.myProfileService.getAllProfiles().then((users: any)=> {
      this.users = users;
      this.users.forEach((user,index) => {
        if(index === 0) {
          user.lat = 40.438072;
          user.lng = -3.626636;
        } else if(index === 1) {
          user.lat = 40.438391;
          user.lng = -3.626798;
        }else if(index === 2) {
          user.lat = 40.442923;
          user.lng = -3.619347;
        }else if(index === 3) {
          user.lat = 40.435558;
          user.lng = -3.620447;
        }else if(index === 4) {
          user.lat = 40.438051;
          user.lng = -3.637433;
        }else if(index === 5) {
          user.lat = 40.446547;
          user.lng = -3.612298;
        }else if(index === 6) {
          user.lat = 40.447521;
          user.lng = -3.637167;
        }else if(index === 7) {
          user.lat = 40.440086;
          user.lng = -3.618938;
        }
      })
    });
  }

  getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      })
    }
  }

  navigate(id){
    console.log(id);
    this.router.navigate(['profile', id])
  }

  ngOnInit(){
    this.getUserLocation();
    this.getAllProfiles();
  }

}
