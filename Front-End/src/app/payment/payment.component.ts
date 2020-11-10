import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {Dialog} from '../dialog/dialog.component'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  ngOnInit(): void {};
  constructor(public dialog: MatDialog) {};
  openDialog() {
    const dialogRef = this.dialog.open(Dialog);

    dialogRef.afterClosed()
    //   .subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}


