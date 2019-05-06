import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  User: any;
  constructor(private httpClient: HttpClient) {}

  getAllProfiles(): any  {
    console.log('llamando a todos los Users');
    return this.httpClient.get(`${environment.api_url}/api/v1/user/`).toPromise().then((users: any)=> users);
  }

  getMyProfile(): any  {
    console.log('llamando my User');
    return this.httpClient.get(`${environment.api_url}/api/v1/user/my-user/`).toPromise().then((users: any)=> users);
  }

  editMyProfile(id, value): any  {
    debugger
    console.log('llamando edit User');
    return this.httpClient.patch(`${environment.api_url}/api/v1/user/${id}`, value).toPromise().then((id: any)=> id);
  }

  getUser(id): any  {
    console.log('llamando edit User');
    return this.httpClient.get(`${environment.api_url}/api/v1/user/${id}`, id).toPromise().then((users: any)=> users);
  }

}
