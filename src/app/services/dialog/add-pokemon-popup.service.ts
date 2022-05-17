import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { AddPokemonPopupComponent } from 'src/app/widgets/popup/add-pokemon-popup/add-pokemon-popup.component';

@Injectable({
  providedIn: 'root',
})
export class AddPokemonPopupService {
  constructor(private dialog: MatDialog) {}

  public openPopup(): Observable<Pokemon> {
    let dialogRef = this.dialog.open(AddPokemonPopupComponent);
    return dialogRef.componentInstance.createdPokemon.asObservable();
  }
}
