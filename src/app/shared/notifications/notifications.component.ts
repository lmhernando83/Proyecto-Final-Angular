import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.component.html',
  styleUrls: ['notifications.component.scss'],
})

export class NotificationsComponent {

  constructor(public dialog: MatDialog){}


}
