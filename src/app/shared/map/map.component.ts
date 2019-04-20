import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss'],
})

export class MapComponent implements OnInit{

  lat: number;
  lng: number;

  users: any[] = [
  {
    id: 1,
    name: 'Maria',
    image: 'http://lorempixel.com/30/30',
    url: 'profile/1',
    lat: 40.391260,
    lng: -3.695460,
  },{
    id: 2,
    name: 'Pepe',
    image: 'http://lorempixel.com/30/30',
    url: 'profile/2',
    lat: 40.406300,
    lng: -3.693540,
  }
];

  ngOnInit(){
    this.getUserLocation()
  }

  getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      })
    }
  }

}
