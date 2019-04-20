import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { AddTaskModel } from '../../models/add-task.model';
import { AddTaskFormComponent } from '../add-task-form/add-task-form.component';
import { AssignedTaskComponent } from '../assigned-task/assigned-task.component';


@Component({
  selector: 'app-list-task',
  templateUrl: 'list-task.component.html',
  styleUrls: ['list-task.component.scss'],
})


export class ListTaskComponent implements OnInit {
@Input() save;
@Input() edit;

  constructor(public dialog: MatDialog, public snackbar: MatSnackBar){}

  tasks: AddTaskModel[];
  idForTask: number;
  taskTitle: string;
  taskDescription: string;
  taskDate: Date;
  taskStatus: string = 'Pending';
  toggleTask: any = {};

  todoTask: AddTaskModel[];
  idForTodo: number;
  todoTitle: string;
  todoDescription: string;
  todoDate: Date;
  todoStatus: string = 'Assigned';
  toggleTodo: any = {};


  openModalTask(){
    const dialogRef = this.dialog.open(AddTaskFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.tasks.push(result);
        this.success('New task added');
      }
    });
  }

  assignedTask(){
    this.dialog.open(AssignedTaskComponent);
  }

  success(msg){
    this.config['panelClass'] = ['notification' , 'success'];
    this.snackbar.open(msg, '', this.config);
  }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: 'top'
  }


  ngOnInit(){
    this.idForTask = 4;
    this.idForTodo = 4;
    this.tasks = [
      {
        id: 1,
        title: 'Finish Angular Screencast',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consequatur alias quod corrupti illo rerum veritatis dolorum dicta sed perferendis.',
        date: new Date(),
        status: this.taskStatus
      },
      {
        id: 2,
        title: 'Take over world',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consequatur alias quod corrupti illo rerum veritatis dolorum dicta sed perferendis.',
        date: new Date(),
        status: this.taskStatus
      },
      {
        id: 3,
        title: 'One more thing',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consequatur alias quod corrupti illo rerum veritatis dolorum dicta sed perferendis.',
        date: new Date(),
        status: this.taskStatus
      },
    ];
    this.todoTask = [
      {
        id: 1,
        title: 'Finish Angular Screencast',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consequatur alias quod corrupti illo rerum veritatis dolorum dicta sed perferendis.',
        date: new Date(),
        status: this.todoStatus
      },
      {
        id: 2,
        title: 'Take over world',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consequatur alias quod corrupti illo rerum veritatis dolorum dicta sed perferendis.',
        date: new Date(),
        status: this.todoStatus,
      },
      {
        id: 3,
        title: 'One more thing',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consequatur alias quod corrupti illo rerum veritatis dolorum dicta sed perferendis.',
        date: new Date(),
        status: this.todoStatus
      },
    ];
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.success('Task Deleted');
  }

  editTask(task): void {
    const dialogRef = this.dialog.open(AddTaskFormComponent, {data: task});
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let index = this.tasks.findIndex(task => {
          return task.id === result.id
        });
        this.tasks.splice(index, 1, result);
        this.success('Task Edited');
      }
    });
  }

  rejectTodo(id: number): void {
    this.todoTask = this.todoTask.filter(todo => todo.id !== id);
    this.success('Todo Rejected');
  }


  acceptTodo(todo): void {
    todo.status = 'Accepted';
    this.success('Todo Accepted');
  }


  completeTodo(todo): void{
      todo.status = 'Complete';
      todo.complete = true;
      this.success('Todo Mark has Completed');
  }

  incompleteTodo(todo): void{
    todo.status = 'Incomplete';
    todo.incomplete = true;
    this.success('Todo Mark has Imcompleted');
  }

}

