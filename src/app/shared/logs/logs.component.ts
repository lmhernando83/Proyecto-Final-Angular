import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-logs',
  templateUrl: 'logs.component.html',
  styleUrls: ['logs.component.scss'],
})

export class LogsComponent{

  constructor(public dialog: MatDialog){}

  loginOpen(){
    this.dialog.open(LoginComponent);
  }

  registerOpen(){
    this.dialog.open(RegisterComponent);
  }

}
