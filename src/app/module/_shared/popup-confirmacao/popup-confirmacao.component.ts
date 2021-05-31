import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-confirmacao',
  templateUrl: './popup-confirmacao.component.html',
  styleUrls: ['./popup-confirmacao.component.css']
})
export class PopupConfirmacaoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupConfirmacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialog: MatDialog,
  ){
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
  }

}
