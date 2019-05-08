import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyProfileService } from "../../services/my-profile.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.scss'],
})

export class UserProfileComponent implements OnInit{

  constructor(private httpClient: HttpClient, private myProfileService: MyProfileService, private route: ActivatedRoute) {}

  user: any[] = [];
  id: string;

  getUser(id): void{
    this.myProfileService.getUser(id).then((user: any)=> {
      this.user = user;
    });
  }



  ngOnInit(){
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.id =  params['id'];
    });
    this.getUser(this.id);
  }

}
