import { Component } from '@angular/core';


@Component({
  selector: 'app-assigned-task',
  templateUrl: 'assigned-task.component.html',
  styleUrls: ['assigned-task.component.scss'],
})

export class AssignedTaskComponent {

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

}
