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

  //users: UserModel;
  users: any[] = [];
  user: any[] = [];
  tasks: AddTaskModel[] = [];

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
