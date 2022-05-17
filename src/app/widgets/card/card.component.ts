import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pokemon } from 'src/app/models/pokemon';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationDialogPopupService } from 'src/app/services/dialog/confirmation-dialog.service';
import { ConfirmationPopupComponent } from '../popup/confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  @Output() displayedPokemonsChanged: EventEmitter<Array<Pokemon>> =
    new EventEmitter<Array<Pokemon>>();
  additionalInformation: string;

  get isEditing() {
    return this.pokemon.isEditing;
  }
  constructor(
    private dataService: DataService,
    private confirmationPopup: ConfirmationDialogPopupService
  ) {}

  ngOnInit() {
    this.additionalInformation = JSON.parse(
      JSON.stringify(this.pokemon.additionalInformation)
    );
  }

  removePokemon(id: number): void {
    this.confirmationPopup
      .openPopup(
        'Are you sure you want to remove this item?',
        'Remove',
        'Cancel'
      )
      .subscribe(() => {
        this.displayedPokemonsChanged.emit(this.dataService.removePokemon(id));
      });
  }

  save(pokemon: Pokemon): void {
    this.pokemon.additionalInformation = this.additionalInformation;
    this.dataService.savePokemon(pokemon);
    this.pokemon.isEditing = false;
  }

  edit(): void {
    this.dataService.resetPokemonEdit();
    this.additionalInformation = this.pokemon.additionalInformation;
    this.pokemon.isEditing = true;
  }

  cancelEdit(): void {
    this.pokemon.isEditing = false;
    this.additionalInformation = this.pokemon.additionalInformation;
  }
}
