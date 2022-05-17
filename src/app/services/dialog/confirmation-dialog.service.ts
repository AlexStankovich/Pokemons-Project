import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DataModel } from 'src/app/models/dataModel';
import { ConfirmationPopupComponent } from 'src/app/widgets/popup/confirmation-popup/confirmation-popup.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogPopupService {
  constructor(private dialog: MatDialog) {}

  data: DataModel;

  public openPopup(
    title: string = 'Are you sure?',
    confirmLabel: string = 'Yes',
    cancelLabel: string = 'No'
  ): Observable<void> {
    this.data = new DataModel(title, confirmLabel, cancelLabel);
    let dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      data: this.data,
    });
    return dialogRef.componentInstance.confirmed.asObservable();
  }
}
