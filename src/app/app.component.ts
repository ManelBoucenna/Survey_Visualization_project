import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px'
    });

   }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './welcome-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

