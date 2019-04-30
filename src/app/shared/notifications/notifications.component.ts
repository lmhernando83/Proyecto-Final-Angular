import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddTaskService } from '../../services/add-task.service';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.component.html',
  styleUrls: ['notifications.component.scss'],
})

export class NotificationsComponent implements OnInit{

  counter: number;

  constructor(public dialog: MatDialog, public addTaskService: AddTaskService){}

  ngOnInit(){
    const counter = this.addTaskService.getTodo.length;
    this.counter = counter;
    console.log(counter);
  }

}
