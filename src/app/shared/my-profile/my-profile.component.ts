import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
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
  constructor(private formBuilder: FormBuilder, private myProfileService: MyProfileService, public dialog: MatDialog, public snackbar: MatSnackBar) {
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

  editMyProfile(value: any){
    //console.log(this.users);
    this.myProfileService.editMyProfile(this.users['_id'], value).then(
      value => {
        console.log('Edit Profile', value);
        this.success('Profile Edited');
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
    this.editMyProfile(value);
  }
}
