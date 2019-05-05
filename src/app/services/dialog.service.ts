import { Injectable } from "@angular/core";
import { MatDialog } from '@angular/material';
import { DialogConfirmComponent } from '../shared/dialog-confirm/dialog-confirm.component';


@Injectable({
  providedIn: 'root'
})

export class DialogService {
  constructor(public dialog: MatDialog){}

  openConfirmDialog(msg){
    return this.dialog.open(DialogConfirmComponent,{
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '25px'},
      data: {
        message : msg
      }
    })
  }
}
