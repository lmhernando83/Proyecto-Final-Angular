import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector:'app-dialog-confirm',
  templateUrl: 'dialog-confirm.component.html',
  styleUrls: ['dialog-confirm.component.scss'],
})

export class DialogConfirmComponent{

  constructor(@Inject(MAT_DIALOG_DATA) public data){}

}
