import { Component, OnInit, Input, Output } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { AddTaskModel } from '../../models/add-task.model';
import { UserModel } from '../../models/user.model';
import { AddTaskFormComponent } from '../add-task-form/add-task-form.component';
import { AssignedTaskComponent } from '../assigned-task/assigned-task.component';
import { AddTaskService } from '../../services/add-task.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-list-task',
  templateUrl: 'list-task.component.html',
  styleUrls: ['list-task.component.scss'],
})


export class ListTaskComponent implements OnInit {
@Input() save;
@Input() edit;
@Output() isCheckTask;
selectedTask;

  constructor(public dialog: MatDialog, public snackbar: MatSnackBar, private addTaskService: AddTaskService, private dialogervice: DialogService){}

  tasks: AddTaskModel[] = [];
  toggleTask: any = {};
  //task = false;
  users: UserModel;

  todoTask: AddTaskModel[];
  toggleTodo: any = {};

  //Opens new Task Modal and Add the task
  openModalTask(){
    const dialogRef = this.dialog.open(AddTaskFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //Post a Mongo
        this.addTaskService.addTask(result).then(
          response => {
            console.log('New Task Add', response);
            this.getTasks();
            // Mensage
            this.success('New task added');
          },
          err => {
            console.log('error New Task Add', err);
          }
        );
      }
    });
  }

  getTasks(){
    this.addTaskService.getTask().then((tasks: any)=> {
      this.tasks = tasks;
      this.tasks.forEach(task => {
        task["isSelected"] = false;
      })
    });
  }


  // Opens Assigned task Modal
  assignedTask(){
   const dialogRef = this.dialog.open(AssignedTaskComponent, {data: this.selectedTask})
   .afterClosed().subscribe(res =>{
      this.getTasks();
  });
  }

  isCheck(task): void{
    if(this.selectedTask === task) {
      this.selectedTask = null;
    } else {
      this.selectedTask = task;
      task["isSelected"] = true;
    }

    this.tasks.forEach(task => {
      if(task !== this.selectedTask) {
        task["isSelected"] = false;
      }
    })
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


  deleteTask(id: number): void {
    this.dialogervice.openConfirmDialog('Are you sure you want to delete this task ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.addTaskService.deleteTask(id).then((id: any) => {
          this.tasks = this.tasks.filter(task => task.id !== id);
          this.getTasks();
          this.success('Task Deleted');
        }).catch(error => {
          console.log(error);
        });
      }
    });
  }


  editTask(task): void {
    const dialogRef = this.dialog.open(AddTaskFormComponent, {data: task});
    dialogRef.afterClosed().subscribe(task => {
      if(task){
        this.addTaskService.editTask(task).then(
          data => {
            console.log('Edit Task', data);
            this.getTasks()
            //Mensaje
            this.success('Task Edited');
          },
          err => {
            console.log('error Edit Task', err);
          }
        );
      }
    });
  }

  getTodos(){
    this.addTaskService.getTodo().then((todos: any)=> {
      this.todoTask = todos;
    });
  }

  rejectTodo(id: number): void {
    this.dialogervice.openConfirmDialog('Are you sure you want to reject this todo ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.addTaskService.rejectTodo(id).then((id: any) => {
          this.tasks = this.tasks.filter(task => task.id !== id);
          this.getTodos();
          this.success('Todo Rejected');
        }).catch(error => {
          console.log(error);
        });
      }
    });
  }


  acceptTodo(id): void {
    this.addTaskService.acceptTodo(id).then((id: any) => {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.getTodos();
      this.success('Todo Accepted');
    }).catch(error => {
      console.log(error);
    });
  }


  completeTodo(id): void{
      this.addTaskService.completeTodo(id).then((res: any) => {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.getTodos();
        this.success('Todo Mark has Completed');
      }).catch(error => {
        console.log(error);
      });
  }

  incompleteTodo(id): void{
    this.addTaskService.incompleteTodo(id).then((res: any) => {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.getTodos();
      this.success('Todo Mark has Incompleted');
    }).catch(error => {
      console.log(error);
    });
  }



 ngOnInit(){
    this.getTasks();
    this.getTodos();
  }
}

