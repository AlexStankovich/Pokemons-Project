import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataModel } from 'src/app/models/dataModel';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss'],
})
export class ConfirmationPopupComponent implements OnInit {
  @Output() confirmed: EventEmitter<void> = new EventEmitter<void>();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DataModel,
    private dialogRef: MatDialogRef<ConfirmationPopupComponent>
  ) {}

  ngOnInit() {}

  public confirm(): void {
    this.confirmed.emit();
    this.dialogRef.close();
  }
}
