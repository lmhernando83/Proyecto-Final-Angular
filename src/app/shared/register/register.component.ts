import { Component, Output, EventEmitter, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AuthLoginService } from '../../services/auth-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss'],
})


export class RegisterComponent implements OnInit {


  @Output() save = new EventEmitter();

  form: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private authLoginService: AuthLoginService,
    public dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private router: Router) {
  }


  initForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.initForm();
  }

  onSave(value) {
    //this.save.emit(value);
    if (this.form.valid) {
      this.authLoginService.register(this.form.value).then(
        response => {
          this.router.navigate(['/init-panel']);
          console.log('Register OK', response);
          this.dialogRef.close(response);
        },
        err => {
          console.log('error en el Register', err);
          //this.showError = true;
        }
      );
    }
    this.form.reset();
  }

}
