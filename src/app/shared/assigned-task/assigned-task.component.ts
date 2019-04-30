import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyProfileService } from "../../services/my-profile.service";
import { AddTaskModel } from '../../models/add-task.model';
import { AddTaskService } from '../../services/add-task.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatSnackBarConfig } from '@angular/material';


@Component({
  selector: 'app-assigned-task',
  templateUrl: 'assigned-task.component.html',
  styleUrls: ['assigned-task.component.scss'],
})

export class AssignedTaskComponent {

  constructor(
    private httpClient: HttpClient,
    private myProfileService: MyProfileService,
    private addTaskService: AddTaskService,
    public snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<AssignedTaskComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) {}

  users: any[] = [];
  user: any[] = [];
  tasks: AddTaskModel[] = [];

  getAllProfiles(): void{
    this.myProfileService.getAllProfiles().then((users: any)=> {
      this.users = users;
    });
  }

  getMyProfile(): void{
    this.myProfileService.getMyProfile().then((user: any)=> {
      this.user = user;
    });
  }

  assignedTask(task, user){
    debugger
    this.addTaskService.assingTask(this.data, user).then(
      response => {
        console.log('Assigned Task', response);
        this.dialogRef.close(response);
        this.getTasks();
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

  closeModal(){
    this.dialogRef.close();
  }

  ngOnInit() {
    this.getAllProfiles();
  }

}
