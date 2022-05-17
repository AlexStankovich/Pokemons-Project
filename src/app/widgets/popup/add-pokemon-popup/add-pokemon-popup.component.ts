import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Pokemon } from 'src/app/models/pokemon';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-pokemon-popup',
  templateUrl: './add-pokemon-popup.component.html',
  styleUrls: ['./add-pokemon-popup.component.scss'],
})
export class AddPokemonPopupComponent implements OnInit {
  @Output() createdPokemon: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  dataLoaded: boolean = false;
  selectedPokemon: Pokemon;
  additionalInfo!: string;
  unaddedPokemons: Array<Pokemon> = new Array<Pokemon>();

  constructor(
    private dialogRef: MatDialogRef<AddPokemonPopupComponent>,
    public dataService: DataService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getPokemons().subscribe((data) => {
      this.dataService.allPokemons = data;
      this.unaddedPokemons = this.dataService.filterUnaddedPokemons();
      this.dataLoaded = true;
    });
  }

  public createPokemon(): void {
    this.selectedPokemon.additionalInformation = this.additionalInfo;
    this.createdPokemon.emit(this.selectedPokemon);
    this.dialogRef.close();
  }
}
