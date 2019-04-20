import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})


export class LoginComponent implements OnInit {

  @Output() save = new EventEmitter();

  form: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder) {
  }


  initForm(edit: any = {}) {
    this.form = this.formBuilder.group({
      id: [''],
      user: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.initForm();
  }

  onSave(value) {
    this.save.emit(value);
    this.form.reset();
  }

}
