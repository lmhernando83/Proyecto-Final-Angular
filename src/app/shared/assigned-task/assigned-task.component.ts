import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyProfileService } from "../../services/my-profile.service";
import { UserModel } from '../../models/user.model';
import { AddTaskModel } from '../../models/add-task.model';
import { AddTaskService } from '../../services/add-task.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-assigned-task',
  templateUrl: 'assigned-task.component.html',
  styleUrls: ['assigned-task.component.scss'],
})

export class AssignedTaskComponent {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private myProfileService: MyProfileService,
    private addTaskService: AddTaskService,
    public snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<AssignedTaskComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) {}

  users: UserModel;
  user: any[] = [];
  tasks: AddTaskModel[] = [];

  getAllProfiles(): void{
    this.myProfileService.getAllProfiles().then((users: any)=> {
      this.users = users;
    });
  }

  navigate(id){
    console.log(id);
    this.dialogRef.close();
    this.myProfileService.getUser(this.data._id).then(
      response => {
        this.router.navigate(['profile', id]);
      },
      err => {
        console.log('error Navigate', err);
      }
    );
  }

  assignedTask(task, user){
    this.addTaskService.assingTask(this.data, user).then(
      response => {
        console.log('Assigned Task', response);
        this.dialogRef.close(response);
        this.success('Task Assigned');
      },
      err => {
        console.log('error Assigned Task', err);
      }
    );
  }

  getTasks(){
    this.addTaskService.getTask().then((tasks: any)=> {
      this.tasks = tasks;
    });
  }

  // Config Messages
  success(msg){
    this.config['panelClass'] = ['notification' , 'success'];
    this.snackbar.open(msg, '', this.config);
  }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: 'top'
  }

  ngOnInit() {
    this.getAllProfiles();
  }

}
