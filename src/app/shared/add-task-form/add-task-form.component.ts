import { Component, Output, EventEmitter, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddTaskModel } from '../../models/add-task.model';


@Component({
  selector: 'app-add-task',
  templateUrl: 'add-task-form.component.html',
  styleUrls: ['add-task-form.component.scss']
})

export class AddTaskFormComponent implements OnInit {

  @Output() save = new EventEmitter();
  @Output() edit = new EventEmitter();

  form: FormGroup;
  tasks: AddTaskModel[];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddTaskFormComponent>,
     @Inject(MAT_DIALOG_DATA) private data: any) {
  }

  initForm(edit: any = {}) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      status: 'Pending'
    })
  }

  initFormData(edit: any = {}) {
    this.form = this.formBuilder.group({
      title: [this.data.title],
      date: [this.data.date],
      description: [this.data.description],
      status: 'Pending'
    })
  }

  ngOnInit() {
    if(this.data) {
      this.initFormData();
    } else {
      this.initForm();
    }
  }

  onSave(value) {
    this.dialogRef.close(value);
    this.form.reset();
    this.save.emit(value);
  }

  onEdit(task) {
    task._id = this.data._id;
    this.dialogRef.close(task);
    this.form.reset();
    this.save.emit(task);
  }

}


