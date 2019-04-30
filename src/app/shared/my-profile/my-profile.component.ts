import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '../../models/user.model';
import { MyProfileService } from "../../services/my-profile.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: 'my-profile.component.html',
  styleUrls: ['my-profile.component.scss'],
})

export class MyProfileComponent implements OnInit {

  @Output() save = new EventEmitter();
  form: FormGroup;
  user: UserModel;
  users: UserModel;
  constructor(private formBuilder: FormBuilder, private myProfileService: MyProfileService) {
  }


  initForm() {
    this.form = this.formBuilder.group({
      name: [this.users ? this.users.name : '', Validators.compose([Validators.required, Validators.minLength(8)])],
      description: [this.users ? this.users.description :'', Validators.required],
      image: ['', Validators.required]
    })
  }

  getMyProfile(): void{
    this.myProfileService.getMyProfile().then((users: any)=> {
      this.users = users;
      //if(this.users.description)
      this.form.controls['name'].setValue(this.users.name);
      this.form.controls['description'].setValue(this.users.description);
    });
  }

  editMyProfile(id){
    //console.log(this.users);
    id = (this.users['_id']);
    this.myProfileService.editMyProfile(id).then(
      data => {
        console.log('Edit Profile', data);
        this.onSave(id);
      },
      err => {
        console.log('error Edit Profile', err);
      }
    );
  }

  ngOnInit() {
    this.initForm();
    this.getMyProfile();
  }

  onSave(value) {
    console.log(value);
    this.save.emit(value);
  }
}
