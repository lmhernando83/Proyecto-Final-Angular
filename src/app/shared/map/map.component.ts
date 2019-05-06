import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyProfileService } from "../../services/my-profile.service";

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss'],
})

export class MapComponent implements OnInit{

  constructor(private httpClient: HttpClient, private myProfileService: MyProfileService) {}

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
          user.lat = 40.391260;
          user.lng = -3.695460;
        } else if(index === 1) {
          user.lat = 40.406300;
          user.lng = -3.693540;
        }
      })
      debugger;
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

  ngOnInit(){
    this.getUserLocation();
    this.getAllProfiles();
  }

}
