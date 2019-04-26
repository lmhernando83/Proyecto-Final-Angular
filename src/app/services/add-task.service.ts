import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AddTaskModel } from '../models/add-task.model';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {

  constructor(private httpClient: HttpClient) {
  }

  token: string;
  Task: any;


  addTask(result): Promise<object> {
    console.log('Registrando Task');
    return this.httpClient.post(`${environment.api_url}/api/v1/task/new-task`, result).toPromise();
  }

  getTask(): Promise<object>  {
    console.log('llamando a las task');
    return this.httpClient.get(`${environment.api_url}/api/v1/task/my-list`).toPromise().then((tasks: AddTaskModel)=> {
      this.Task = tasks;
      return tasks;
    });
  }

  deleteTask(id): Promise<object>  {
    console.log('llamando delete task');
    return this.httpClient.delete(`${environment.api_url}/api/v1/task/delete-task/${id}`).toPromise().then((tasks_id: AddTaskModel)=> tasks_id);
  }

  editTask(task): Promise<object>  {
    debugger
    console.log('llamando edit task');
    return this.httpClient.patch(`${environment.api_url}/api/v1/task/edit/${task._id}`, task).toPromise().then((task: AddTaskModel)=> task);
  }

  assingTask(task, user): Promise<object>  {
    debugger
    console.log('llamando assign task');
    return this.httpClient.patch(`${environment.api_url}/api/v1/task/assign/${task._id}/${user._id}`, task).toPromise().then((task: AddTaskModel)=> task);
  }

  getTodo(): Promise<object>  {
    console.log('llamando a los todos');
    return this.httpClient.get(`${environment.api_url}/api/v1/task/my-todo`).toPromise().then((tasks: AddTaskModel)=> {
      this.Task = tasks;
      return tasks;
    });
  }

  rejectTodo(todo): Promise<object>  {
    console.log('llamando reject task');
    debugger
    return this.httpClient.patch(`${environment.api_url}/api/v1/task/reject/${todo._id}`, {id: todo._id}).toPromise().then((todo: AddTaskModel)=> todo);
  }

  acceptTodo(todo): Promise<object>  {
    console.log('llamando accept task');
    debugger
    return this.httpClient.patch(`${environment.api_url}/api/v1/task/accept/${todo._id}`, {id: todo._id}).toPromise().then((todo: AddTaskModel)=> todo);
  }

  completeTodo(todo): Promise<object>  {
    console.log('llamando complete task');
    debugger
    return this.httpClient.patch(`${environment.api_url}/api/v1/task/completed/${todo._id}`, {id: todo._id}).toPromise().then((todo: AddTaskModel)=> todo);
  }

  incompleteTodo(todo): Promise<object>  {
    console.log('llamando incomplete task');
    debugger
    return this.httpClient.patch(`${environment.api_url}/api/v1/task/incompleted/${todo._id}`, {id: todo._id}).toPromise().then((todo: AddTaskModel)=> todo);
  }
}
