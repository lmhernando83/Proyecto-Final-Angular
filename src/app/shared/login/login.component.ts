import { Component, Output, EventEmitter, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AuthLoginService } from '../../services/auth-login.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})


export class LoginComponent implements OnInit {

  @Output() save = new EventEmitter();

  form: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private authLoginService: AuthLoginService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private router: Router) {
  }


  initForm(edit: any = {}) {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.initForm();
  }

  onSave(value) {
    //this.save.emit(value);
    if (this.form.valid) {
      this.authLoginService.login(this.form.value).then(
        response => {
          this.router.navigate(['/init-panel']);
          console.log('login OK', response);
          this.dialogRef.close(response);
        },
        err => {
          console.log('error en el login', err);
          //this.showError = true;
        }
      );
    }
    this.form.reset();
  }

}
