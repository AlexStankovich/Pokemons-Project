import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationDialogPopupService } from 'src/app/services/dialog/confirmation-dialog.service';
@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit, OnDestroy {
  displayedPokemons: Array<Pokemon> = new Array<Pokemon>();
  subscriptions: Array<Subscription> = new Array<Subscription>();
  isSorted: boolean = false;
  filterQuery: string = '';
  timer: NodeJS.Timer;
  additionalInformation: string;

  constructor(
    public dataService: DataService,
    private confirmationPopupService: ConfirmationDialogPopupService
  ) {}

  ngOnInit() {
    this.dataService.resetPokemonEdit();
    this.displayedPokemons = this.dataService.addedPokemons;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  removePokemon(id: number): void {
    this.subscriptions.push(
      this.confirmationPopupService
        .openPopup(
          'Are you sure you want to remove this item?',
          'Remove',
          'Cancel'
        )
        .subscribe(() => {
          this.displayedPokemons = this.dataService.removePokemon(id);
        })
    );
  }

  edit(pokemon: Pokemon): void {
    this.dataService.resetPokemonEdit();
    this.additionalInformation = pokemon.additionalInformation;
    pokemon.isEditing = true;
  }

  cancelEdit(pokemon: Pokemon): void {
    pokemon.isEditing = false;
    pokemon.additionalInformation = pokemon.additionalInformation;
  }

  sortAlphabetically(): void {
    this.isSorted = !this.isSorted;
    if (this.isSorted) {
      this.dataService.addedPokemons.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    } else {
      this.dataService.addedPokemons.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
  }

  filterPokemons(filterQuery: string): void {
    this.filterQuery = filterQuery;
    this.dataService.filterPokemonsByName(
      this.dataService.addedPokemons,
      this.filterQuery
    );
  }

  onFilterChange(event: KeyboardEvent): void {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.filterPokemons((event.target as HTMLInputElement).value);
    }, 400);
  }
}
