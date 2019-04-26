import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { AddTaskModel } from '../../models/add-task.model';
import { AddTaskFormComponent } from '../add-task-form/add-task-form.component';
import { AssignedTaskComponent } from '../assigned-task/assigned-task.component';
import { AddTaskService } from '../../services/add-task.service';



@Component({
  selector: 'app-list-task',
  templateUrl: 'list-task.component.html',
  styleUrls: ['list-task.component.scss'],
})


export class ListTaskComponent implements OnInit {
@Input() save;
@Input() edit;

  constructor(public dialog: MatDialog, public snackbar: MatSnackBar, private addTaskService: AddTaskService,){}

  tasks: AddTaskModel[] = [];
  toggleTask: any = {};
  task = false;

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
            this.getTasks()
          },
          err => {
            console.log('error New Task Add', err);
          }
        );

        // Mensage
        this.success('New task added');
      }
    });
  }

  getTasks(){
    this.addTaskService.getTask().then((tasks: any)=> {
      this.tasks = tasks;
    });
  }

  // Opens Assigned task Modal
  assignedTask(){
    this.dialog.open(AssignedTaskComponent);
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
    this.addTaskService.deleteTask(id).then((id: any) => {
      debugger
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.getTasks();
      this.success('Task Deleted');
    }).catch(error => {
      console.log(error);
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
    this.addTaskService.rejectTodo(id).then((id: any) => {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.getTodos();
      this.success('Todo Rejected');
    }).catch(error => {
      console.log(error);
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
        debugger
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.getTodos();
        this.success('Todo Mark has Completed');
      }).catch(error => {
        console.log(error);
      });
  }

  incompleteTodo(id): void{
    //todo.status = 'Incomplete';
    //todo.incomplete = true;
    this.addTaskService.incompleteTodo(id).then((res: any) => {
      debugger
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

