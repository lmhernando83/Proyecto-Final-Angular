import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  constructor(private httpClient: HttpClient) {
  }

  token: string;
  User: any;

  //Esta ya no me vale
  set Token(value) {
    window.localStorage.setItem('token', value);
    this.token = value;
  }


  get getToken() {
    if (!this.token) {
      this.token = window.localStorage.getItem('token');
    }
    return this.token;
  }

  login(data) {
    console.log('llamando a login');
    return this.httpClient.post(`${environment.api_url}/auth/sign-in`, data).toPromise().then((res: any) => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        this.token = res.token;
      }
    }).then(res => {
      console.log('Get Users')
      return this.getUser();
    });
  }

  getUser(): Promise<object>  {
    console.log('llamando a getUser');
    return this.httpClient.get(`${environment.api_url}/me`).toPromise().then((user: UserModel)=> {
      this.User = user;
      return user;
    });
  }

  register(data) {
    console.log('llamando a Register');
    return this.httpClient.post(`${environment.api_url}/auth/sign-up`, data).toPromise().then((res: any) => {
       return this.token = res.token;
    })
  }

}
