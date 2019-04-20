import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss'],
})


export class RegisterComponent implements OnInit {



  @Output() save = new EventEmitter();

  form: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder) {
  }


  initForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
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
