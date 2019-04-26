import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  User: any;
  constructor(private httpClient: HttpClient) {}

  getProfile(id): Promise<object>  {
    console.log('llamando User');
    debugger
    return this.httpClient.get(`${environment.api_url}/api/v1/user/my-profile/${id}`).toPromise().then((user: UserModel)=> {
      this.User = user;
      return user;
    });
  }
}
